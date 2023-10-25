import {Route,Switch,Redirect} from "react-router-dom"
import "./App.css"
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"
import MyNavLink from "./components/MyNavLink";
/*
* 知识点：
* 1. Redirect组件使用
* */
export default function App() {
  return(
    <section className="app">
      <Header/>
      <section className="container">
        <nav className="nav">
          <MyNavLink to="/about" >About</MyNavLink>
          <MyNavLink to="/home" >Home</MyNavLink>
        </nav>
        <article className="pages">
          <Switch>
            {/*第一次进入网页时是 localhost:3000/ 这个路径， 所以两个路由都不会匹配*/}
            {/*如果希望进入网页后默认选中一个，需要使用Redirect组件重定向*/}
            <Route path="/about" component={About}/>
            <Route exact path="/home" component={Home}/>
            <Redirect to="/home"/>
          </Switch>
        </article>
      </section>
    </section>
  )
}