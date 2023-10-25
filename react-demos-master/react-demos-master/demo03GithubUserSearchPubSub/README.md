[Back to Master](/#demo03)

知识点：

1. pubsub-js包的使用——通过消息订阅方式实现组件通信
2. useEffect hook 的使用
   > 每次更新组件，或者组件第一次挂载都会重新执行 useEffect，调用一个新的 effect 之前会对前一个 effect 进行清理。 React 将按照 effect 声明的顺序依次调用组件中的每一个 effect。所以useEffect()不是乱序执行的。 但是每个浏览器的 js 的实现其实是不同的，极限条件下打印效果可能会出现偏差。Firefox的运行效果是完全符合React文档描述的。
