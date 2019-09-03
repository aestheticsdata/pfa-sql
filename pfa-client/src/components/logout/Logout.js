import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  logout,
  logoutSuccess,
} from './actions';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.isAuthenticated !== prevProps.isAuthenticated) {
      this.props.logoutSuccess();
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    logoutSuccess: () => dispatch(logoutSuccess()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

