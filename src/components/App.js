import React, {Component} from "react"
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"
import "./App.css"

class App extends Component{
    constructor(){
        super()
        this.state = {
            todos: TodosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render(){
        let todoItems = this.state.todos.map(item => 
        <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
            <div className="todo-items">
                {todoItems}
            </div>
        )
    }
}

export default App

// import React, {Component} from "react"
// import Conditional from "./Conditional"

// class App extends Component{
//     constructor(){
//         super()
//         this.state = {
//             isLoading: true
//         }
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({
//                 isLoading: false
//             })
//         }, 1500)
//     }

//     render(){
//         return(
//             <div>
//                 {this.state.isLoading ?
//                 <h1>Loading...</h1> :
//                 <Conditional />}
//             </div>
//         )
//     }
// }

// export default App

// import React from "react"

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             isLoggedIn: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(){
//         this.setState(prevState => {
//             return {
//                 isLoggedIn: !prevState.isLoggedIn
//             }
//         })
//     }

//     render(){
//         let displayButton = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
//         let displayText = this.state.isLoggedIn ? "User currently logged in" : "User currently logged out"
//         return(
//             <div>
//                 <h3>{displayText}</h3>
//                 <button onClick={this.handleClick}>{displayButton}</button>
//             </div>
//         )
//     }
// }

// export default App