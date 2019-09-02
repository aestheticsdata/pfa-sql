import React, { Component } from 'react';
import { connect } from 'react-redux';

import StyledMain from './StyledMain';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push('login');
    }
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
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
};

export default connect(mapStateToProps, null)(Main);
