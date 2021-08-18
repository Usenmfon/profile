import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentClass extends Component {
    constructor(){
        super()
        this.state = {
            message: 'this is the parent class'
        }
    }

    handleClick = () => alert(`Hello ${this.state.message}`)

    render() {
        return (
            <div>
                <ChildComponent 
                handleClick={this.handleClick}
                message={this.state.message}
                />
            </div>
        )
    }
}

export default ParentClass
