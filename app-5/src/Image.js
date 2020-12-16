import React, { Component } from 'react';

export default class Image extends Component {
    render() {
        return (
            <div>
                <img src={this.props.link} />
                <p>Rad-BIKE</p>
            </div>
        )
    }
}