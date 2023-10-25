import "./index.css"

export default function List(props) {
  const {users, isLoading} = props
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