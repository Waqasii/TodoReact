import styles from "../style.module.css"
import shortid from "shortid"
const Form = ({ todo, setTodo, todoList, setTodoList }) => {

    const handleChange = (event) => {
        setTodo(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setTodoList([...todoList, {
            name: todo,
            id: shortid.generate(),
            completed: false,
        }])
        setTodo("")
        console.log(todoList)
    }
    return (
        <div className={styles.formdiv}>
            <form className={styles.todoform} onSubmit={handleSubmit}>
                <input className={styles.todoinput} value={todo} onChange={handleChange} placeholder="Add todo item"></input>
                <button className={styles.addbutton} type="submit">+</button>

            </form>
        </div>


    )
}

export default Form;