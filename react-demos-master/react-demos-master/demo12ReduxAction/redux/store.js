/*引入 createStore，用于创建redux的store对象 */
import {createStore} from "redux";
/*引入 countReducer */
import countReducer from "./countReducer"

export default createStore(countReducer)