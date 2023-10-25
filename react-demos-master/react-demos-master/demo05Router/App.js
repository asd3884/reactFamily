import {Link,Route,NavLink} from "react-router-dom"
import "./App.css"
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"
/*
* 知识点：
* 1.路由组件和一般组件
*   1)写法不同
*       一般组件：<XXX/>
*       路由组件：<Route path="/xxx" component={XXX}/>
*   2)一般组件通常放置在components文件夹，路由组件一般放在pages文件夹
*   3)路由组件会接收到来自于Route父组件的很多props,console.log(this.props)可以查看多了很多属性。
* 2.路由组件的使用
* 3.Link 和 NavLink的区别，NavLink 在点击“激活”后会有添加一个“active”的html class
* */
export default function App() {
  return(
    <section className="app">
      <Header/>
      <section className="container">
        <nav className="nav">
          {/*路由主键的写法不是直接写<About/><Home/>，而是下面这样写*/}
          {/*Link 组件点击后没有active类名，所以不适合用作导航，只适合用作普通跳转*/}
          <Link to="/about" className="link-about btn">About</Link>
          <Link to="/home" className="link-home btn">Home</Link>
          <NavLink to="/about" className="link-home btn">About</NavLink>
          <NavLink to="/home" className="link-home btn">Home</NavLink>
        </nav>
        <article className="pages">
          <Route path="/about" component={About}/>
          <Route path="/home" component={Home}/>
        </article>
      </section>
    </section>
  )
}