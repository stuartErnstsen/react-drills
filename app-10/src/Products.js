import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default class Products extends Component {
    constructor() {
        super();

        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios.get('https://practiceapi.devmountain.com/products').then(response => {
            this.setState({ products: response.data })
        });
    };

    render() {
        console.log(this.state.products)
        let products = this.state.products.map((e, i) => {
            if (e.image) {
                return (
                    <Link key={i} to={`/Details/${e.id}`}>
                        <img width="200" src={e.image} />
                    </Link>
                )
            }
        })
        return (
            <div>
                <h1>Pokemon</h1>
                {products}
            </div>
        )
    }
}   
