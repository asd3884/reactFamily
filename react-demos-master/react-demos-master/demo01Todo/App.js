import React from 'react'
import {useState} from "react"
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import "./App.css"
/*
* 知识点：
* 1.React Hooks 语法
* 2.useState
* 3.nanoid包的使用
* 4.数组的filter方法和map方法
* 5.PropTypes是一个static属性
* */
const lists = [
  {
    id: "001",
    text: "test0",
    timestamp: new Date().getMilliseconds(),
    done: true
  },
  {
    id: "002",
    text: "test1",
    timestamp: new Date().getMilliseconds(),
    done: false,
  },
  {
    id: "003",
    text: "test2",
    timestamp: new Date().getMilliseconds(),
    done: false,
  },
]
export default function App() {
  //useState钩子
  const [todos, setTodos] = useState(lists)

  //子组件传递给父组件，采用回调函数方式
  const addTodo = (newTodo) => {
    // console.log("app",newTodo)
    const newTodos = [newTodo, ...todos]
    //更新状态
    setTodos(newTodos)
  }

  //更新Todo，将方法传递给子组件，可以让子组件传递数据给父组件
  const updateTodo = (id, done) => {
    // map 的作用
    const newTodos = todos.map((todo) => {
      if (id === todo.id) return {...todo, done}
      else return todo
    })
    setTodos(newTodos)
  }

  //删除Todo
  const deleteTodo = (id) => {
    // filter的作用，通过返回条件判断对原数组进行过滤，生成一个新数组
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  //清除所有“已完成”Todos
  const clearDoneTodos = (newTodos) => {
    setTodos(newTodos)
  }

  //勾选所有Todos
  const checkAllTodos = ()=>{
    const newTodos = todos.map((todo)=>{
      return {...todo,done:true}
    })
    setTodos(newTodos)
  }

  //取消勾选所有Todos
  const unCheckAllTodos = ()=> {
    const newTodos = todos.map(todo=>{return {...todo,done:false}})
    setTodos(newTodos)
  }
  return (
    <div className="app">
      <Input addTodo={addTodo}/>
      <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      <Footer todos={todos} clearDoneTodos={clearDoneTodos} checkAllTodos={checkAllTodos} unCheckAllTodos={unCheckAllTodos}/>
    </div>
  )
}

function Input(props) {
  const placeHolder = "请输入你的任务名称，按回车键确认"
  const {addTodo} = props

  //KeyUp监听事件，keyCode = 13 是“回车”
  const handleKeyUp = (event) => {
    if (event.keyCode !== 13) return
    if (event.target.value.trim() === "") return
    const newTodo = {
      id: nanoid(),
      text: event.target.value,
      timestamp: new Date().getMilliseconds(),
      done: false
    }
    addTodo(newTodo)
    event.target.value = ""
  }

  return (
    <input onKeyUp={handleKeyUp} type="text" name="todoInput" className="add" placeholder={placeHolder}/>
  )
}

Input.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

function List(props) {
  const {todos, updateTodo, deleteTodo} = props

  //函数“柯里化”
  const handleCheck = (id) => {
    return (event) => {
      const done = event.target.checked
      updateTodo(id, done)
    }
  }
  const handleDelete = (id) => {
    if (!window.confirm("确定删除吗？")) return
    deleteTodo(id)
  }
  return (
    <ul className="lists">
      {
        todos.map((todo) => {
          return (
            <li key={todo.id} className="list">
              <label>
                {/*注意 checked 和 defaultChecked 区别*/}
                <input type="checkbox" value={todo.text} checked={todo.done} onChange={handleCheck(todo.id)}/>
                {todo.text}
              </label>
              <button className="btn-danger btn btn-delete" onClick={() => handleDelete(todo.id)}>删除</button>
            </li>
          )
        })
      }
    </ul>
  )
}

List.propTypes = {
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

function Footer(props) {
  const {todos,clearDoneTodos,checkAllTodos,unCheckAllTodos} = props
  const handleChange = (event)=>{
    if(event.target.checked) {
      unCheckAllTodos()
    } else {
      checkAllTodos()
    }
    event.target.checked ? checkAllTodos() : unCheckAllTodos()
  }
  // 使用filter过滤出已完成的Todos
  const doneTodos = todos.filter(todo => todo.done)
  return (
    <div className="footer">
      <label>
        <input type="checkbox" onChange={(event)=>handleChange(event)} checked={doneTodos.length === todos.length && todos.length !== 0}/>
      </label>
      <span>
        <span>已完成{doneTodos.length}</span>/<span>全部{todos.length}</span>
      </span>
      <button className="btn btn-danger btn-clear" onClick={()=>clearDoneTodos(todos.filter(todo=>!todo.done))}>清除已完成的任务</button>
    </div>
  )
}

Footer.propTypes = {
  todos: PropTypes.array.isRequired
}