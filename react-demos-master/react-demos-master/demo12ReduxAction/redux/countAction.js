/*
* 该文件用于创建action对象
* */
import {INCREMENT, DECREMENT} from "./constant";

export const creatIncrementAction = (data) => ({type: INCREMENT, data})
export const creatDecrementAction = (data) => ({type: DECREMENT, data})