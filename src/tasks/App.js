import React, {Component} from "react"
import TodoItem from "./TodoItem"
import TodoData from "./TodoData"
import "./App.css"

class App extends Component{
    constructor(){
        super()
        this.state = {
            todos: TodoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState =>{
            const UpdatedTodo = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return UpdatedTodo
        })
    }

    render(){
        const todoCollection = this.state.todos.map(item => <TodoItem 
            key={item.id} item={item} handleChange={this.handleChange}/>)
        return(
            <div>
                {todoCollection}
            </div>
        )
    }
}

export default App