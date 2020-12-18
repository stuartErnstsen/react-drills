import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            usernameInput: '',
            passwordInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleLogin = () => {
        alert(`You have been logged in as ${this.state.usernameInput} and your password is ${this.state.passwordInput}`)
        this.setState({
            usernameInput: '',
            passwordInput: ''
        })
    }
    render() {
        return (
            <div>
                <label>UserName: </label>
                <input id="usernameInput" value={this.state.usernameInput} onChange={this.handleChange} />
                <br />
                <label>Password: </label>
                <input id="passwordInput" value={this.state.passwordInput} onChange={this.handleChange} />
                <br />
                <button onClick={this.handleLogin}>LOGIN</button>
            </div>
        )
    }
}

export default Login;