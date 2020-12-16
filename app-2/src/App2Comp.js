import React, { Component } from 'react';

export default class App2Comp extends Component {
    constructor() {
        super();

        this.state = {
            strArray: ['Ben', 'Stuart', 'Jase', 'Dj', 'Connor', 'Jake', 'Michalin', 'Tori']
        }
    }

    render() {
        const listedStrArr = this.state.strArray.map((e, i) => {
            return (
                <h2 id={i}>{e}</h2>
            )
        })
        return (
            <div className="App">
                {listedStrArr}
            </div>
        )
    }
}