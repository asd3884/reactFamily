import {Route, Switch, Redirect} from "react-router-dom"
import "./App.css"
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"
import MyNavLink from "./components/MyNavLink";
/*
* 知识点：
* 1. 多级路由的使用
* 2. 三种向路由传递参数的方式。每种方式，刷新浏览器都可以保留参数
*   * params参数，注册路由要使用/:id/:title的方式，传递方式to="/xxx/yyy/someId/someTitle"
*   * search参数，正常注册路由即可，传递方式 to="/xxx/yyy?id=someId&title=someTitle"
*   * state参数，正常注册路由即可，传递方式 to={{pathname:/xxx/yyy,state:{id:someId,title,someTitle}}}
* */
export default function App() {
  return (
    <section className="app">
      <Header/>
      <section className="container">
        <nav className="nav">
          <MyNavLink to="/about">About</MyNavLink>
          <MyNavLink to="/home">Home</MyNavLink>
        </nav>
        <article className="pages">
          <Switch>
            {/*第一次进入网页时是 localhost:3000/ 这个路径， 所以两个路由都不会匹配*/}
            {/*如果希望进入网页后默认选中一个，需要使用Redirect组件重定向*/}
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Redirect to="/home"/>
          </Switch>
        </article>
      </section>
    </section>
  )
}