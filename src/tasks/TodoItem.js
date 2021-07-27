import React from "react"

function TodoItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" 
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)}
            />
            <p>Today's Task: {props.item.todo}</p>
        </div>
    )
}

export default TodoItem