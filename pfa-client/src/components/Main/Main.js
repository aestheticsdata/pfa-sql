import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const users = fetch('/api/users').then((response) => {
      return response.json();
    }).then((myJson) => {
      console.log(JSON.stringify(myJson));
    });
  }

  render() {
    return (
      <div>Main</div>
    );
  }
}

export default Main;
