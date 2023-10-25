import {withRouter} from "react-router-dom"
import "./index.css"

const Header = (props) => {
  /*使用了 withRouter 方法后，props 作为一般组件也能拥有history，location等路由组件才有的属性。*/
  /*这样一般组件也能是一所react封装的history api 了*/
  console.log("Header,props:", props)
  const routerGo = () => {
    props.history.go(2)
  }
  const routerGoForward = () => {
    props.history.goForward()
  }
  const routerGoBack = () => {
    props.history.goBack()
  }
  return (
    <header>
      <h1 className="title">React Router DOM</h1>
      <div className="btn-routers">
        <button className="btn btn-router" onClick={() => {
          routerGo()
        }}>go(2)前进(2)
        </button>
        <button className="btn btn-router" onClick={() => {
          routerGoForward()
        }}>goForward前进
        </button>
        <button className="btn btn-router" onClick={() => {
          routerGoBack()
        }}>goBack后退
        </button>
      </div>
    </header>
  )
}
export default withRouter(Header)
/*这是一个一般组件*/
