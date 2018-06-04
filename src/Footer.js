import React, { Component } from 'react';

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            title: "The Goddamn Footer"
        }
    }

    render() {
        return (
            <footer> 
                <h1>Welcome to {this.state.title}, bitch </h1>
            </footer> 
        )
    }
}

export default Footer
