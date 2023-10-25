import List from "./components/List"
import Search from "./components/Search"
import "./App.css"
/** 知识点：
 * 1.fetch 的使用
 * 2.async await promise
* */
export default function App() {
  return (
    <section className="app">
      <Search />
      <List />
    </section>
  );
}