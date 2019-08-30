import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import GlobaleStyle from './global-styles';

import NavBar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Login from './components/login/Login';
import Register from './components/register/Register';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobaleStyle />
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login}  />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
