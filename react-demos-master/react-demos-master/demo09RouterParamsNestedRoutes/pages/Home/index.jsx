import {NavLink,Route} from "react-router-dom";
import Message from "./Message";
import News from "./News";
import "./index.css"

/*这是一个路由组件，一般放在pages文件夹下面，普通组件一般放在components文件夹下*/
export default function Home() {
  return (
    <div className="home">
      <h3>这是Home</h3>
      <div className="tabs">
        <NavLink to="/home/message" className="btn link-message">Message</NavLink>
        <NavLink to="/home/news" className="btn link-news">News</NavLink>
      </div>
      <div className="tab-container">
        <Route path="/home/message" component={Message}/>
        <Route path="/home/news" component={News}/>
      </div>
    </div>
  )
}