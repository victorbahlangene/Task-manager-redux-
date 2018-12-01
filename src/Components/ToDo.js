import React, { Component } from "react";
import { connect } from "react-redux";
import { addMessage } from "../Actions/listActions";

//find a way to display tocal storage

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoVal: "" //,
      //localStorage: []
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

  //storing list in local storage

  componentWillMount() {
    /*
    localStorage.getItem("test1") &&
      this.setState({
        localStorage: localStorage.getItem("test1"),
        isLoading: false
      });
    */
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("test1", nextProps.toDoArr);
  }

  render() {
    let displayList = this.props.toDoArr.map((val, idx) => {
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

    const s2 = localStorage.getItem("test1").split(",");
    /*
    const s2Mapped = s2.map((val, idx) => {
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
    */
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
        {/*
        <ul>{displayList}</ul>
        <ul>{s2Mapped}</ul>
        */}
        {displayList}
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
