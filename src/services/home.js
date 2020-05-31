import {get, post } from '@/utils/request'
import api from '@/services/api'
export const list = () => get(api.list)
export const add = (a) => post(api.add, a)
export const delUser = (a) => post(api.del, a)
export const updates = (a) => post(api.update, a)