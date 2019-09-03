import React, { Component } from 'react';
import { connect } from 'react-redux';

import StyledMain from './StyledMain';

class Main extends Component {
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
    token: state.loginReducer.tokzn,
  }
};

export default connect(mapStateToProps, null)(Main);
