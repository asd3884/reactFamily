import "./index.css"
import axios from "axios"
export default function Search(props) {
  let keyWordEle
  const {saveUsers,setIsLoading} = props
  const placeHolder = "请输入关键词搜索"
  const search = ()=> {
    //设置 isLoading
    setIsLoading(true)
    //获取用户输入
    const {value} = keyWordEle
  //  发送网络请求
    axios.get(`http://localhost:3000/users?q=${value}`)
      .then(response=>{
        console.log(response.data)
        saveUsers(response.data.items)
        setIsLoading(false)
      })
      .catch(error=> {
        console.log(error)
        setIsLoading(false)
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