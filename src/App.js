import React, { Component } from "react";
import ToDo from "./Components/ToDo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <ToDo />
        </div>
      </Provider>
    );
  }
}

export default App;
