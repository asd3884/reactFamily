import React from 'react';
import {Link, Route} from "react-router-dom"
import "./index.css"
import Detail from "./Detail";

function Message(props) {
  const messages = [
    {id: "01", title: "message1"},
    {id: "02", title: "message2"},
    {id: "03", title: "message3"},
    {id: "04", title: "message4"},
  ]
  return (
    <div className="tab-message">
      <h4>Messages</h4>
      <div className="messages">
        {
          messages.map((msg) => {
            return (
              /*向路由传递 params 参数*/
              // <Link to={`/home/message/detail/${msg.id}/${msg.title}`} key={msg.id}>{msg.title}</Link>

              /*向路由传递 search 参数*/
              // <Link to={`/home/message/detail?id=${msg.id}&title=${msg.title}`} key={msg.id}>{msg.title}</Link>

              /*向路由传递 state 参数*/
              <Link to={{pathname: "/home/message/detail", state: {id: msg.id, title: msg.title}}}
                    key={msg.id}>{msg.title}</Link>
            )
          })
        }
      </div>
      <div className="message">
        {/*向路由传递 params 参数*/}
        {/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}

        {/*向路由传递 search 参数，正常注册路由即可*/}
        {/*<Route path="/home/message/detail" component={Detail}/>*/}
        
        {/*向路由传递 state 参数，正常注册路由即可*/}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    </div>
  );
}

export default Message;