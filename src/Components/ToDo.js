import React, { Component } from "react";

/* NOW MANAGE STATE USING REDUX */

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoArr: [],
      toDoVal: ""
    };
  }

  handleChange = e => {
    this.setState({
      toDoVal: e.target.value
    });
  };

  handleClick = () => {
    this.setState({
      toDoArr: [...this.state.toDoArr, this.state.toDoVal]
    });
  };

  handleDelete = val => {
    // both of these work
    //let toBDeleted = document.querySelector(`#${val}`);
    let toBDeleted = document.getElementById(`${val}`);
    toBDeleted.style.display = "none";
    //console.log("delete");
  };

  render() {
    const displayTasks = this.state.toDoArr.map((val, idx) => {
      return (
        <li id={val} key={idx}>
          {val}
          <button
            className="btn btn-danger btn-sm"
            onClick={this.handleDelete.bind(this, val)}
          >
            x
          </button>
        </li>
      );
    });

    return (
      <div className="container">
        <br />
        <form>
          <input
            type="text"
            placeholder="What is your task"
            onChange={this.handleChange.bind(this)}
          />
          <input
            type="button"
            className="btn btn-light"
            value="add to list"
            onClick={this.handleClick.bind(this)}
          />
        </form>
        <ul>{displayTasks}</ul>
      </div>
    );
  }
}

export default ToDo;
