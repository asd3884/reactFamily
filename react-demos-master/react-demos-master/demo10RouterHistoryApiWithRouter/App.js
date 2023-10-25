import {Route, Switch, Redirect} from "react-router-dom"
import "./App.css"
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"
import MyNavLink from "./components/MyNavLink";
/*
* 知识点：
* 1. replace 属性会导致 history 使用 replace方式跳转而不是push
* 2. 可编程的 react router 提供的 history api
* 3. withRouter 方法可以使一般组件能够接受到路由组件才有的 props，从而使得一般组件可以使用 history 等api
* */
export default function App() {
  return (
    <section className="app">
      <Header/>
      <section className="container">
        <nav className="nav">
          {/*使用 replace 属性会导致 history 使用 replace方式跳转而不是push*/}
          {/*<MyNavLink replace to="/about">About</MyNavLink>*/}
          {/*<MyNavLink replace to="/about">About</MyNavLink>*/}
          <MyNavLink to="/home">Home</MyNavLink>
          <MyNavLink to="/about">About</MyNavLink>
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