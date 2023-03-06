import styles from "../style.module.css"

const Form = () => {
    return (
        <div className={styles.formdiv}>
            <form className={styles.todoform}>
                <input className={styles.todoinput} placeholder="Add todo item"></input>
                <button className={styles.addbutton} type="submit">+</button>
            </form>
        </div>
    )
}

export default Form;