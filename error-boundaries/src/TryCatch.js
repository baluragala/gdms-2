import React, { Component } from "react";

class TryCatch extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log("error:", error);
    console.log("info:", info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sorry, an error has occured.</h1>;
    }
    return this.props.children;
  }
}

export default TryCatch;
