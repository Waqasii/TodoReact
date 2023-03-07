import TodoItem from "./TodoItem"
import CompletedTodo from "./CompletedTodo"
const ListItem = ({ todoList, todo, setTodoList, setTodo }) => {
    const incomplete_todo = todoList.filter((item) => item.completed == false)
    const complete_todo = todoList.filter((item) => item.completed == true)

    return (
        <div>
            <div>
                {incomplete_todo.map((item) => (
                    <TodoItem key={item.id} todo={item} todoList={todoList} setTodoList={setTodoList} setTodo={setTodo} />
                ))}
            </div>

            <div>
                {complete_todo.map((item) => (
                    <CompletedTodo key={item.id} todo={item} />
                ))}

            </div>

        </div>
    )
}

export default ListItem;