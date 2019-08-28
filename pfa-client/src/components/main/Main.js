import React, { Component } from 'react';

import StyledMain from './StyledMain';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const users = fetch('/users').then((response) => {
      return response.json();
    }).then((myJson) => {
      console.log(JSON.stringify(myJson));
    });
  }

  render() {
    return (
      <StyledMain>
        Main
      </StyledMain>
    );
  }
}

export default Main;
