import Header from "./components/Header.js";
import Form from "./components/Form.js";
import { useState } from "react";
import ListItem from "./components/ListItem.js";
import ClearComplete from "./components/ClearComplete.js";

function App() {
  const [todo, settodo] = useState("")
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      <Header />
      <Form
        todo={todo} setTodo={settodo} todoList={todoList} setTodoList={setTodoList}
      />
      <ListItem todoList={todoList} todo={todo} setTodoList={setTodoList} setTodo={settodo} />
      <ClearComplete todoList={todoList} setTodoList={setTodoList} />
    </div>
  )
}

export default App;
