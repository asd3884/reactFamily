import {Link,Route,NavLink,Switch} from "react-router-dom"
import "./App.css"
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"
import MyNavLink from "./components/MyNavLink";
import Test from "./pages/Test"
/*
* 知识点：
* 1.模糊匹配
* 2.exact精准匹配（慎用）会导致二级路由无法匹配
* */
export default function App() {
  return(
    <section className="app">
      <Header/>
      <section className="container">
        <nav className="nav">
          {/*路由主键的写法不是直接写<About/><Home/>，而是下面这样写*/}
          {/*Link 组件点击后没有active类名，所以不适合用作导航，只适合用作普通跳转*/}
          <MyNavLink to="/about" >About</MyNavLink>
          {/*http://localhost:3000/home/a/b 这个路径仍然可以匹配/home*/}
          {/*而 /home/a/b 却不能匹配 /home/a/b/c*/}
          {/*所以Home组件不会显示，Test组件会显示*/}
          {/*如果使用了严格匹配“exact”，必须精准匹配，所以两个组件都不会显示*/}
          <MyNavLink to="/home/a/b" >Home</MyNavLink>
        </nav>
        <article className="pages">
          <Route path="/about" component={About}/>
          <Switch>
            <Route path="/home/a/b/c" component={Home}/>
            <Route exact path="/home" component={Test}/>
          </Switch>
        </article>
      </section>
    </section>
  )
}