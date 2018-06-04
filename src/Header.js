import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            title: "My Page"
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title.toUpperCase()}</h1>
            </div> 
        )
    }
}

export default Header