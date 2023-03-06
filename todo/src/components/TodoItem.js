import styles from '../style.module.css'


const TodoItem = () => {
    return (
        <div className={styles.todoItem} >
            <h3 className={styles.todoText}>Go for a walk</h3>
            <div className={styles.todoButton}>
                <button>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="green" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12l6 6 12-12" />
                    </svg>
                </button>
                <button>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="red" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div >
    )
}

export default TodoItem;