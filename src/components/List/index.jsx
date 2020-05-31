import React from 'react';
import { Table ,Button,Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { connect } from 'dva'
import Updateform from '@/components/Updateform'
@connect (({home} )=> {
  return {
    data:home.data,
    visible:home.visible,
    edit:home.edit
  }
})
export default class index extends React.Component {
  columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (a,b) => {
        return (<span>
        <Button type="primary" size='small' onClick={()=>this.updatefn(b)}>编辑</Button>
        <Button type="danger" size='small' onClick={()=>this.dellfn(b)}>删除</Button>
        </span>)
      },
    },
  ];
  state = {
    id: ''
  };
  dellfn = (a) => {
    Modal.confirm({
      title: '删除提示',
      icon: <ExclamationCircleOutlined />,
      content: '确定删除该条数据吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        this.props.dispatch({
          type: 'home/dell',
          payload:a.id
        }) 
      }
    });
  }
  updatefn = (a) => {
    this.setState({
      id: a.id,
      visible: true,
    })
    this.props.dispatch({
      type: 'home/modalShow',
      payload: {
        name: a.name,
        age: a.age,
        address:a.address
      }
    }) 
  }
  componentDidMount () {
    this.props.dispatch({
      type: 'home/getData',
    })
  }
  render() {
    const { data,edit} = this.props;
    return <div>
      <Table rowKey='id' columns={this.columns} dataSource={data} size="small" />
      <Updateform datas = { edit } />
    </div>;
  }
}



