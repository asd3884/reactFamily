import "./index.css"
import PubSub from "pubsub-js"
import {useState, useEffect} from "react"

export default function List(props) {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // 每次更新组件，或者组件第一次挂载都会重新执行 useEffect，调用一个新的 effect 之前对前一个 effect 进行清理。
  // React 将按照 effect 声明的顺序依次调用组件中的每一个 effect。所以useEffect()不是乱序执行的。
  // 但是每个浏览器的 js 的实现其实是不同的，打印效果会出现偏差。Firefox的运行效果是完全符合React文档描述的。
  /*
  Chrome:
  * index.jsx:15 loading true
    index.jsx:19    清除loading
    index.jsx:34    清除user-list
    index.jsx:13 use effect loading
    index.jsx:24 use effect user-list

    index.jsx:15 loading false
    index.jsx:28 user-list Object
    index.jsx:19    清除loading
    index.jsx:34    清除user-list
    index.jsx:13 use effect loading
    index.jsx:24 use effect user-list

    index.jsx:19    清除loading
    index.jsx:34    清除user-list
    index.jsx:13 use effect loading
    index.jsx:24 use effect user-list

  Firefox:
    loading true
       清除loading
       清除user-list
    use effect loading
    use effect user-list

    loading false
       清除loading
       清除user-list
    use effect loading
    use effect user-list

    user-list Object { total_count: 9, incomplete_results: false, items: (9) […] }
       清除loading
       清除user-list
    use effect loading
    use effect user-list
  * */
  useEffect(() => {
    console.log('use effect loading')
    const token = PubSub.subscribe("loading", (msg, data) => {
      console.log(msg, data)
      setIsLoading(data)
    })
    return () => {
      console.log("   清除loading")
      PubSub.unsubscribe(token)
    }
  })
  useEffect(() => {
    console.log('use effect user-list')
    // 这里其实是每次执行 useEffect 都重新订阅了一次，因为清除上一次useEffect的时候取消了订阅。
    // 所以每次的token打印出来都不同
    const token = PubSub.subscribe("user-list", (msg, data) => {
      console.log(msg, data)
      // 更新状态就会执行useEffect
      setUsers(data.items)
    })
    // 清除上一次的 useEffect 时会调用返回的这个函数
    return () => {
      console.log("   清除user-list")
      PubSub.unsubscribe(token)
    }
  })

  const handleRender = () => {
    return !isLoading ?
      users.map((oUser) => {
        return (
          <li className="user-item" key={oUser["id"]}>
            <div className="avatar"><img src={oUser["avatar_url"]} alt="avatar"/></div>
            <div className="name"><a href={oUser["html_url"]}>{oUser["login"]}</a></div>
          </li>
        )
      }) : <div>Loading</div>
  }
  return (
    <ul className="user-list">
      {handleRender()}
    </ul>
  )
}