/*这是一个封装的 NavLink 组件*/
import {NavLink} from "react-router-dom";

export default function MyNavLink(props) {
  //这里的NavLink 指定了 activeClassName，不指定时默认为"active"
  console.log(props.children)
  //props.children 就是<MyNavLink>之间的东西</MyNavLink>
  return(
    <NavLink activeClassName="myActiveClassName" className="btn" {...props}/>
  )
}