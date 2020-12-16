import React, { Component } from 'react';

class App1 extends Component {
    constructor() {
        super();

        this.state = {
            userInput: ''
        }
    }

    handleInput(e) {
        this.setState({ userInput: e.target.value });
    }

    render() {
        return (
            <div className="App">
                <input onChange={e => this.handleInput(e)}></input>
                <p>{this.state.userInput}</p>
            </div>
        )
    }
}

export default App1;