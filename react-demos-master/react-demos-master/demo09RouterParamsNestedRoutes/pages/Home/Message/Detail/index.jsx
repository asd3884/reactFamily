import React from 'react';
import qs from "querystring"

const DetailData = [
  {id: "01", content: "白日依山尽"},
  {id: "02", content: "黄河入海流"},
  {id: "03", content: "欲穷千里目"},
  {id: "04", content: "更上一层楼"},
]

function Detail(props) {
  console.log(props)

  /*从match中取得params参数*/
  // const {id, title} = props.match.params || {}
  // const result = DetailData.find(detail => {
  //   return detail.id === id
  // }) || {}

  /*从location取得search参数*/
  // const {search} = props.location || ""
  // const {id, title} = qs.parse(search.slice(1))
  // console.log(id, title)
  // const result = DetailData.find(detail => {
  //   return detail.id === id
  // }) || {}

  /*从location取得state参数*/
  const {id, title} = props.location.state || {}
  console.log(id, title)
  const result = DetailData.find(detail => {
    return detail.id === id
  }) || {}
  return (
    <div>
      <h5>Detail</h5>
      <ul>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{result.content}</li>
      </ul>
    </div>
  );
}

export default Detail;