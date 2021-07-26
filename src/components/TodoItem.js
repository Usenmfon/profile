import React from "react"

function TodoItem(props){

    const completedStyle = {
        fontStyle: "italic",
        textDecoration: "line-through",
        color: "#cdcdcd"
    }

    return(
        <div className="todo-item">
            <input type="checkbox" 
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)}/>
            <p style={props.item.completed ? completedStyle : null}>Task:{props.item.todo}</p>
        </div>
    )
}

export default TodoItem