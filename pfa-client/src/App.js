import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import store from './store';
import { history } from './history';

import GlobaleStyle from './global-styles';

import NavBar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import ForgotPasswrod from './components/forgotPassword/ForgotPassword';

import { PrivateRoute } from './components/privateRoute/PrivateRoute';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobaleStyle />
        <ConnectedRouter history={history}>
          <NavBar />
          <Switch>
            <PrivateRoute exact path="/" component={Main} />
            <Route exact path="/login" component={Login}  />
            <Route exact path="/logout" component={Logout}  />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgotpassword" component={ForgotPasswrod} />
          </Switch>
        </ConnectedRouter>
      </div>
    </Provider>
  );
}

export default App;
