import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Hweee',
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            message:  'Welcome to a new reactjs tutorial! GoodLuck'
        })
        console.log(this)
    }

    render(){
        const { message } = this.state
        const { name } = this.props
        return (
            <div className="container text-center">
                <h1>Hey {name}!</h1>
                <p>{message}</p>
                <button className="btn btn-primary" onClick={this.handleClick}>Welcome</button>
            </div>
        )
    }
}
