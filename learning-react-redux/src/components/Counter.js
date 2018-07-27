import React, { Component } from "react";
import * as counterActions from "../actions/counter";
import { connect } from "react-redux";

class Counter extends Component {
  constructor(...args) {
    super(...args);
    // this.state = { counter: 0 };
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.inc(100)}>INC</button>
        <span>{this.props.counter}</span>
        <button onClick={() => this.props.dec(500)}>DEC</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counterState.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inc: by => dispatch(counterActions.incAction(by)),
    dec: by => dispatch(counterActions.decAction(by))
  };
}

let connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectComponent(Counter);
