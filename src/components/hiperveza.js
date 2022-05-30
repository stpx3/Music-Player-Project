import React, { Component } from "react";
import '../App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
export class Hiperveza extends Component {
  state = {
    ime: "Stipe",
    prezime: "Pupacic",
    lozinka: "stipe"
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("forma je potvrdena", this.state);
  };
  render() {
    return (
      <div>
        
        <form>
        <h1>Moje ime je {this.state.ime}</h1>
          <input
            placeholder="ime"
            value={this.state.ime}
            onChange={(e) => this.setState({ ime: e.target.value })}
          />
          <input
            placeholder="prezime"
            value={this.state.prezime}
            onChange={(e) => this.setState({ prezime: e.target.value })}
          />
          <input
            placeholder="lozinka"
            value={this.state.lozinka}
            onChange={(e) => this.setState({ lozinka: e.target.value })}
          />
          <button onClick={(e) => this.onSubmit(e)}>Potvrdi</button>
        </form>
    
      </div>
    );
  }
}

export default Hiperveza;