import React from 'react'

export default function ChildComponent(props) {
    return (
        <div>
            <h1>{props.message}</h1>
            <button onClick={props.handleClick}>Click me</button>
        </div>
    )
}
