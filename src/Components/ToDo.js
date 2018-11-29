import React, { Component } from "react";
import { connect } from "react-redux";
import { addMessage } from "../Actions/listActions";

/* NOW MANAGE STATE USING REDUX */
/* Now remove items using state. */

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoVal: ""
    };
  }

  handleChange = e => {
    this.setState({
      toDoVal: e.target.value
    });
  };

  handleClick = () => {
    this.props.submitNewMessage(this.state.toDoVal);
    this.setState({
      toDoVal: ""
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
    return (
      <div className="container">
        <br />
        <form>
          <input
            type="text"
            placeholder="What is your task"
            value={this.state.toDoVal}
            onChange={this.handleChange.bind(this)}
          />
          <input
            type="button"
            className="btn btn-dark"
            value="add to list"
            onClick={this.handleClick.bind(this)}
          />
        </form>
        <ul>
          {this.props.toDoArr.map((val, idx) => {
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
          })}
        </ul>
      </div>
    );
  }
}

/* Mapping the state to props */
const mapStateToProps = state => {
  return {
    toDoArr: state.list //.list.toDoArr //list is the name we gave our root reducer
  };
};

//mapDispatchToState
const mapDispatchToProps = dispatch => {
  return {
    submitNewMessage: msg => {
      dispatch(addMessage(msg));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
