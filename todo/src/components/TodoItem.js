import styles from '../style.module.css'


const TodoItem = ({ todoList, todo, setTodoList, setTodo }) => {

    const doneTodo = () => {
        setTodoList(todoList.map((item) => {
            if (item.id === todo.id) {
                return { ...item, completed: true };
            }
            return item
        }))

    };

    const editTodo = () => {
        setTodo("aaa")
        setTodoList(todoList.filter((item) => todo.id !== item.id))

    };

    const deleteTodo = () => {
        setTodoList(todoList.filter((item) => todo.id !== item.id))
    };

    return (
        <div className={styles.todoItem} >
            <h3 className={styles.todoText}>{todo.name}</h3>
            <div className={styles.todoButton}>
                <button onClick={editTodo}>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="blue" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19c-4.5 0-8.5-4-8.5-8.5S7.5 2 12 2s8.5 4 8.5 8.5-4 8.5-8.5 8.5zm0-15c-3 0-5.5 2.5-5.5 5.5S9 15 12 15s5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zM16 12l-4 4-2-2" />
                    </svg>
                </button>
                <button onClick={doneTodo}>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="green" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12l6 6 12-12" />
                    </svg>
                </button>
                <button onClick={deleteTodo}>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="red" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div >
    )
}

export default TodoItem;