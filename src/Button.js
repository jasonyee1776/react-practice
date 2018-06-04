import React, { Component } from 'react';

// ES6 way of writing a function
// clickMe = () => {
//     console.log("I've been clicked")
// }



class Button extends Component {
    constructor() {
        super()
        this.state = {
            title: "Click Me"
        }
    }


handleClick = function(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    document.body.style.backgroundColor = "blue"
    let newAge = (this.state.age += 1);
    this.setState({ age: newAge })
}

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>{this.state.title}</button>
            </div>
        );
    }
}



export default Button 