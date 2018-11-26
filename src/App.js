import React, { Component } from "react";
import ToDo from "./Components/ToDo";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <ToDo />
      </div>
    );
  }
}

export default App;
