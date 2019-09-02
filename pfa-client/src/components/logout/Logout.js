import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  logout,
} from './actions';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  }
};

export default connect(null, mapDispatchToProps)(Logout);

