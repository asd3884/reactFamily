import "./index.css"
import axios from "axios"
import PubSub from "pubsub-js"

export default function Search(props) {
  let keyWordEle
  const placeHolder = "请输入关键词搜索"

  const search = ()=> {
    //获取用户输入
    const {value} = keyWordEle
    if (value === "") return
    //设置 isLoading
    PubSub.publish("loading", true)
  //  发送网络请求
    axios.get(`http://localhost:3000/users?q=${value}`)
      .then(response=>{
        PubSub.publish("loading", false)
        PubSub.publish("user-list", response.data)
      })
      .catch(error=> {
        console.log(error)
        PubSub.publish("loading", false)
      })
  }
  return(
    <div className="search">
      <h1 className="search-title">Search Github Users</h1>
      <input type="text" className="search-input" ref={c => keyWordEle =c} placeholder={placeHolder}/>
      <button className="search-button" onClick={search}>Search</button>
    </div>
  )
}