import styles from '../style.module.css'


const CompletedTodo = ({ todo }) => {
    return (
        <div className={styles.todoItem} >
            <h3 className={styles.completedTodo}>{todo.name}</h3>
        </div >
    )
}

export default CompletedTodo;