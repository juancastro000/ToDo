

const TodoItem = ({item, index, deleteTodoItem, completeTodoItem, moveTodoItem}) => {

    return(
        <div className="todo-list">
            <li style={{textDecoration: item.complete? "line-through" : ""}}>
            {item.todo} </li>
            <div className="btns">
                <button onClick={() => completeTodoItem(index)}>Complete</button>
                <button onClick={() => moveTodoItem(index, -1)}>🢁</button>
                <button onClick={() => moveTodoItem(index, 1)}>🢃</button>
                <button onClick={() => deleteTodoItem(index)}>X</button>
                
            </div>
        </div>
    )
}

export default TodoItem
