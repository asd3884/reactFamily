import List from "./components/List"
import Search from "./components/Search"
import "./App.css"
import {useState} from "react"
/*
* 知识点
* 1.传统的组件通信方式——通过父组件
* 2.通过setupProxy解决跨域问题
* 3.axios模块的使用
* */
export default function App() {
  //初始化状态，使用useState
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const saveUsers = (users) => {
    setUsers(users)
  }
  return (
    <section className="app">
      <Search saveUsers={saveUsers} setIsLoading={setIsLoading}/>
      <List users={users} isLoading={isLoading}/>
    </section>
  );
}