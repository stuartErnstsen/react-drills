import React, { Component } from 'react';

export default class App3Comp extends Component {
    constructor() {
        super();

        this.state = {
            strArr: ['Shark', 'Elephant', 'Dog', 'Cat', 'Bear', 'Tiger', 'Racoon', 'Lion', 'Goat', 'Hawk', 'Eagle'],
            filterArr: ['Shark', 'Elephant', 'Dog', 'Cat', 'Bear', 'Tiger', 'Racoon', 'Lion', 'Goat', 'Hawk', 'Eagle'],
            userInput: ''
        }

        this.filterAnimalList = this.filterAnimalList.bind(this)
    }

    updateUserInput(e) {
        this.setState({ userInput: e.target.value })
    }

    filterAnimalList() {
        let arrCopy = this.state.strArr.slice()
        arrCopy = arrCopy.filter((e) => !e.toLowerCase().includes(this.state.userInput));
        this.setState({ filterArr: arrCopy })
    }

    render() {
        const displayFilterArr = this.state.filterArr.map((e, i) => {
            return (
                <h2 key={i}>{e}</h2>
            )
        })
        return (
            <div className="App">
                <input onChange={e => this.updateUserInput(e)} placeholder="Filter by a string"></input>
                <button onClick={this.filterAnimalList}></button>
                {displayFilterArr}
            </div>
        )
    }
}