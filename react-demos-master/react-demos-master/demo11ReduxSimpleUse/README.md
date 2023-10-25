[Back to Master](/#demo11)

知识点
![img.png](img.png)

1. redux的简单使用
2. redux api
    * createStore(someReducerFunc)
    * reducer 纯函数
    * store.dispatch(someActionObj)
    * store.getState()
    * store.subscribe(()=>{...})
3. redux基础版使用流程
   ```javascript
    // 1.创建文件夹，创建store和相应的reducer
   cd src
   mkdir redux
   --redux
      --store.js
         /*引入 createStore，用于创建redux的store对象 */
         import {createStore} from "redux"; 
         /*引入 countReducer */ 
         import countReducer from "./countReducer"
         export default createStore(countReducer)

      --countReducer.js
         /*
         * 创建一个Reducer函数，且Reducer必须是一个纯函数
         * 该函数接受两个参数，prevState，action
         * */
         const initState = 99
         
         export default function countReducer(prevState = initState, action) {
            console.log(prevState)
            const {type, data} = action
            switch (type) {
               case "increment":
               return prevState + data
               case "decrement":
               return prevState - data
               default:
               return prevState
            }
         }  

   //2.在组件中使用store.dispatch(someAction)来分发action

   ```
4. reducer 两个作用：初始化状态和加工状态
5. store会自动调用reducer一次，以此来初始化状态。此时reducer的参数"prevState"为`undefined`,"action"\
   值为`{type:"@@REDUX/INIT_..."}`
6. useRef钩子