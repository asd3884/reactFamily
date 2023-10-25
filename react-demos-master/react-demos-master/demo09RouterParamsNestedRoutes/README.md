[Back to Master](/#demo09)

知识点：

1. 多级路由的使用
2. 三种向路由传递参数的方式。每种方式，刷新浏览器都可以保留参数
    * params参数，注册路由要使用/:id/:title的方式，传递方式`to="/xxx/yyy/someId/someTitle"`
    * search参数，正常注册路由即可，传递方式 `to="/xxx/yyy?id=someId&title=someTitle"`
    * state参数，正常注册路由即可，传递方式 `to={{pathname:/xxx/yyy,state:{id:someId,title,someTitle}}}`。其中state参数不会改变地址栏的地址

> 如果使用 HashRouter 刷新后会导致路由 state 参数丢失