[Back to Master](/#demo05)

知识点：

1. 路由组件和一般组件
    1. 写法不同 一般组件：`<XXX/>`
       路由组件：`<Route path="/xxx" component={XXX}/>`
    2. 一般组件通常放置在components文件夹，路由组件一般放在pages文件夹
    3. 路由组件会接收到来自于Route父组件的很多props,console.log(this.props)可以查看多了很多属性。
2. 路由组件的使用
3. Link 和 NavLink的区别，NavLink 在点击“激活”后会有添加一个“active”的html class
