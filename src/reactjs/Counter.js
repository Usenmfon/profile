import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    handleClick() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => {console.log("count is: ", this.state.count)})
    }

    render() {
        const { count } = this.state
        
        return (
            <div className="container text-center">
                <p><strong>Counter</strong>- {count}</p>
                <button 
                className="btn btn-primary" 
                onClick={() => this.handleClick()}
                >
                Increment
                </button>
            </div>
        )
    }
}

export default Counter
