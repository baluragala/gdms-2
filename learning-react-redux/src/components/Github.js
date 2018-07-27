import React, { Component } from "react";
import { getUsers } from "../actions/github";
import { connect } from "react-redux";

class Github extends Component {
  constructor(...args) {
    super(...args);
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <button onClick={this.props.getUsers}>GET USERS</button>
        {this.props.isLoading && <p>Please wait...</p>}
        {this.props.users.map(u => (
          <div>
            <img src={u.avatar_url} width={100} height={100} />
            <h3>{u.login}</h3>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.githubState.isLoading,
    users: state.githubState.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(getUsers())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Github);
