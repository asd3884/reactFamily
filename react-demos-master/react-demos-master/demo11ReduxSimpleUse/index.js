import ReactDOM from "react-dom"
import React from "react"
import App from "./App"
import "./index.css"
import store from "./redux/store"


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
)

/*通过redux的api订阅状态，状态改变则重新render*/
store.subscribe(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById("root")
  )
})
