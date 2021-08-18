import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'JavaScript',
        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)

        event.preventDefault()
    }
    
    render() {
        const { username, comments, topic} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" 
                        value={username} 
                        onChange={this.handleUsername}
                        />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea 
                        value={comments} 
                        onChange={this.handleComments}>
                        </textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopic}>
                            <option value="JavaScript">JavaScript</option>
                            <option value="C#">C#</option>
                            <option value="Python">Python</option>
                        </select>
                    </div>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
