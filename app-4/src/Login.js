import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        }

        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.submitInput = this.submitInput.bind(this)
    }

    handleUsername(e) {
        this.setState({ userName: e.target.value })
    }

    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    submitInput() {
        alert(`You logged in as Username: ${this.state.userName} and your Password is: ${this.state.password}`)
    }

    render() {

        return (
            <div>
                <input onChange={this.handleUsername} placeholder="Please enter username"></input>
                <input onChange={this.handlePassword} placeholder="Please enter password"></input>
                <button onClick={this.submitInput}>Login</button>
            </div>
        )
    }
}