import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";


const divStyle = {
  color: "red",
  border: '5px solid pink'
};

class App extends Component {
  constructor() {
    // super() allows us to get back to the Component
    super();
    this.state = {
      name: "Jason",
      faveFood: "burritos",
      age: 11,
      hobbies: ["baseball", "basketball", "football" , true]
    }
    this.steak = {
      name: "T-bone",
      cook: "medium-rare"
    }
  }


  render() {
    return (
      <div className="App">
        <Header/>
        {this.state.hobbies.map(boob => {
          return(
            <div>
              <p> {boob} </p>
            </div>
          )
        })}
        <h1>{this.state.name}</h1>
        <p>My favorite food is: {this.state.faveFood}</p>
        <h2 style={divStyle}>Get your self a fuckin' {this.steak.name} cooked {this.steak.cook}</h2>
        <h3>{this.state.age}</h3>
        <Footer/>
        <Button/>
      </div>
    );
  }
}

export default App;
