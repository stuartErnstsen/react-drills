import React, { Component } from 'react';

class ListDisplay extends Component {
    constructor() {
        super();
        this.state = {
            filterInput: '',
        }
    }

    handleChange = (e) => {
        this.setState({ filterInput: e.target.value })
        console.log(this.state.filterInput)
    }

    render() {
        return (
            <div>
                <input value={this.state.filterInput} onChange={this.handleChange} placeholder="Enter filter text" />
                {this.props.array.filter(e => e.toLowerCase().includes(this.state.filterInput)).map((item, i) => <h2 key={i}>{item}</h2>)}
            </div>

        )
    }
}

export default ListDisplay;