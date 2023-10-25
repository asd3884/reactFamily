/*这是一个路由组件，一般放在pages文件夹下面，普通组件一般放在components文件夹下*/
export default function About(props) {
  console.log(props)
  /*
  * history:
  *   action: "PUSH"
  *   block: ƒ block(prompt)
  *   createHref: ƒ createHref(location)
  *   go: ƒ go(n)
  *   goBack: ƒ goBack()
  *   goForward: ƒ goForward()
  *   length: 50
  *   listen: ƒ listen(listener)
  *   location: {pathname: "/about", search: "", hash: "", state: undefined, key: "1ehams"}
  *   push: ƒ push(path, state)
  *   replace: ƒ replace(path, state)
  *
  * location:
  *   hash: ""
  *   key: "1ehams"
  *   pathname: "/about"
  *   search: ""
  *   state: undefined
  *
  * match:
  *   isExact: true
  *   params: {}
  *   path: "/about"
  *   url: "/about"
  * staticContext: undefined
  * __proto__: Object
  * */
  return (
    <div className="about">这是About</div>
  )
}