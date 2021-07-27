import React from "react"

function TodoItem(props){
    const CompletedStyle = {
        fontStyle: "italic",
        textDecoration: "line-through",
        color: "#cdcdcd"
    }

    return(
        <div className="todo-item">
            <input type="checkbox" 
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? CompletedStyle : null}>Today's Task: {props.item.todo}</p>
        </div>
    )
}

export default TodoItem