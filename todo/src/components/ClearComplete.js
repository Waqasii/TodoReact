import styles from '../style.module.css'


const ClearComplete = ({ todoList, setTodoList }) => {



    const clearDone = () => {
        setTodoList(todoList.filter((item) => item.completed !== true))

    };



    return (
        <button onClick={clearDone} className={styles.clearbutton}>
            Clear Completed Task
        </button>

    )
}

export default ClearComplete;