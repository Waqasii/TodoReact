import TodoItem from "./TodoItem"

const ListItem = ({ todoList }) => {
    return (
        <div>

            {todoList.map((item) => (
                <TodoItem title={item} />
            ))}


        </div>
    )
}

export default ListItem;