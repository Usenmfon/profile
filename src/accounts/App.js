import React, { Component } from 'react'
import Account from './account'

export default class App extends Component {
    state = {
        details: []
    }

    deleteCard = (index) => {
        const {details} = this.state

        this.setState({
            details: details.filter((detail, card) => {
                return card !== index
            }),
        })
    }

    handleSubmit = (detail) => {
        this.setState({ details: [...this.state.details, detail]})
    }

    render(){
        const { details } = this.state
        return (
            <div>
                <Account userDetails={details}
                deleteCard={this.deleteCard}
                handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
