import { list, add, delUser, updates } from '@/services/home'
const { pathToRegexp } = require('path-to-regexp')
export default {
    namespace: 'home',
    state: {
        data: [],
        visible: false,
        edit: [],
        editId: ''
    },
    subscriptions: {
        fn({ history, dispatch }) {
            history.listen(({ pathname }) => {
                const regexp = pathToRegexp('/').exec(pathname)
                if (regexp) {
                    dispatch({ type: 'getData' })
                }
            })
        }
    },
    effects: {
        //默认数据
        * getData({ payload }, { call, put }) {
            const datas = yield call(list);
            yield put({ type: 'defaultData', payload: datas.users });
        },
        //添加
        * addData({ payload }, { call, put }) { // 
            const datas = yield call(() => add(payload));
            if (datas.status === '200') {
                yield put({ type: 'getData' });
            };
        },
        //删除
        * dell({ payload }, { call, put }) {
            const datas = yield call(() => delUser({ id: payload }));
            if (datas.status === '200') {
                yield put({ type: 'getData' });
            }
        },
        //修改
        * updateData({ payload }, { call, put }) {
            yield put({ type: 'hidefn' });
            const datas = yield call(() => updates(payload));
            if (datas.status === '200') {
                yield put({ type: 'getData' });
            }
        },
    },

    reducers: {
        //默认数据
        defaultData(state, { type, payload }) {
            return {...state, data: payload };
        },
        //添加
        addDatas(state, { type, payload }) {
            state.visible = true
            return {...state, data: payload };
        },
        //修改弹出框回显
        modalShow(state, { type, payload }) {
            state.visible = true
            return {...state, edit: payload };
        },
        //弹出框隐藏
        hidefn(state, { type, payload }) {
            state.visible = false
            return {...state };
        },
        //弹出框显示
        showfn(state, { type, payload }) {
            state.visible = true
            return {...state };
        }
    },

};