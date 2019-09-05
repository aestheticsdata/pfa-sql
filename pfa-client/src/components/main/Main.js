import React, { Component } from 'react';
import { connect } from 'react-redux';

import StyledMain from './StyledMain';

import { getUsers } from './actions';

class Main extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <StyledMain>
        Main
      </StyledMain>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.loginReducer.token,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
