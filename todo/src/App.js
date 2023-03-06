import Header from "./components/Header.js";
import Form from "./components/Form.js";
import { useState } from "react";

function App() {
  const [todo, settodo] = useState("")
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      <Header />
      <Form
        todo={todo} setTodo={settodo} todoList={todoList} setTodoList={setTodoList}
      />
    </div>
  );
}

export default App;
