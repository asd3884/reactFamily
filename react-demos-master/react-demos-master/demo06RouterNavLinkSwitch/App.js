import {Link,Route,NavLink,Switch} from "react-router-dom"
import "./App.css"
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"
import MyNavLink from "./components/MyNavLink";
import Test from "./pages/Test"
/*
* 知识点：
* 1.NavLink
* 2.NavLink的封装,this.props.children可以获得组件之间的文本<XXX>之间的文本</XXX>
* 3.路由匹配规则，Switch组件的使用
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

          <MyNavLink to="/about" >About</MyNavLink>
          <MyNavLink to="/home" >Home</MyNavLink>
        </nav>
        <article className="pages">
          <Route path="/about" component={About}/>
          {/*这里点击跳转/home后，两个组件都会匹配，这是React的路由匹配规则*/}
          {/*路由匹配会依次向下，找到所有与/home相同的路径*/}
          {/*通过Switch组件可以在匹配到路由后直接停止匹配，提高效率*/}
          {/*<Switch>*/}
            <Route path="/home" component={Home}/>
            <Route path="/home" component={Test}/>
          {/*</Switch>*/}
        </article>
      </section>
    </section>
  )
}