import { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';

import messages from './messages';
import {
  login,
  clearLoginFailed,
} from './actions';

import SharedLoginForm from '@components/shared/sharedLoginForm/SharedLoginForm';
import StyledLogin from './StyledLogin';
import StyledSharedLoginContainer from '@components/shared/sharedLoginContainer/StyledSharedLoginContainer';


class Login extends Component {
  onSubmit = (values, { setSubmitting }) => {
    this.props.login(values.email, values.password);
    setSubmitting(false);
  };

  componentDidMount() {
    console.log('token : ', this.props.token);
    if (localStorage.getItem('pfa-token')) {
      this.props.history.push('/');
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.loginErrorMessage !== '') {
      Swal.fire({
        title: this.props.intl.formatMessage({ ...messages.loginError }),
        text: this.props.loginErrorMessage,
        type: 'error',
        confirmButtonText: 'close',
        onClose: () => {
          this.props.clearLoginFailed()
        }
      })
    }
    console.log('token :', this.props.token);
    if (this.props.token !== prevProps.token) {
      console.log('dans le if de l update pour token :', this.props.token );
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <>
      {
        this.props.token ?
          null
          :
          <StyledLogin>
            <StyledSharedLoginContainer>
              <SharedLoginForm
                onSubmit={this.onSubmit}
                buttonTitle={this.props.intl.formatMessage({ ...messages.buttonLabel })}
                displayEmailField
                displayPasswordField
              />
              <div className="pwd-forgot">
                <NavLink to="/forgotpassword">
                  <FormattedMessage
                    {...messages.forgotPassword}
                  />
                </NavLink>
              </div>
            </StyledSharedLoginContainer>
          </StyledLogin>
      }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.loginReducer.token,
    loginErrorMessage: state.loginReducer.errorMessage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    clearLoginFailed: () => dispatch(clearLoginFailed()),
  }
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Login));

//
// import { useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Swal from 'sweetalert2';
// import { NavLink } from 'react-router-dom';
// import { FormattedMessage, useIntl } from 'react-intl';
//
// import messages from './messages';
// import {
//   login,
//   clearLoginFailed,
// } from './actions';
//
// import SharedLoginForm from '../shared/sharedLoginForm/SharedLoginForm';
// import StyledLogin from './StyledLogin';
// import StyledSharedLoginContainer from '../shared/sharedLoginContainer/StyledSharedLoginContainer';
//
//
// const Login = ({history }) => {
//   const {log} = console;
//   log("history", history);
//   const prevTokenRef = useRef();
//   const dispatch = useDispatch();
//   const onSubmit = (values, { setSubmitting }) => {
//
//     dispatch(login(values.email, values.password));
//     setSubmitting(false);
//   };
//   const token = useSelector( state => state.loginReducer.token);
//   prevTokenRef.current = token;
//   const loginErrorMessage = useSelector(state => state.loginReducer.errorMessage);
//
//   const intl = useIntl();
//
//   useEffect(() => {
//     log('didmount');
//     log('token au didmount: ', token);
//     if (localStorage.getItem('pfa-token')) {
//       log('history didmount');
//       history.push('/');
//     }
//   }, []);
//
//   useEffect(() => {
//     prevTokenRef.current = token;
//   });
//
//   useEffect(() => {
//     Swal.fire({
//       title: intl.formatMessage({ ...messages.loginError }),
//       text: loginErrorMessage,
//       type: 'error',
//       confirmButtonText: 'close',
//       willClose: () => {
//         dispatch(clearLoginFailed());
//       }
//     })
//   }, [loginErrorMessage]);
//
//   useEffect(() => {
//     log('prevTokenRef', prevTokenRef.current);
//     log('token --', token);
//     if (prevTokenRef.current !== token) {
//       log('token au didupdate: ', token);
//       log('history didupdate');
//     }
//     history.push('/');
//   }, [token]);
//
//   return (
//     <>
//       {
//         token ?
//           null
//           :
//           <StyledLogin>
//             <StyledSharedLoginContainer>
//               <SharedLoginForm
//                 onSubmit={onSubmit}
//                 buttonTitle={intl.formatMessage({ ...messages.buttonLabel })}
//                 displayEmailField
//                 displayPasswordField
//               />
//               <div className="pwd-forgot">
//                 <NavLink to="/forgotpassword">
//                   <FormattedMessage
//                     {...messages.forgotPassword}
//                   />
//                 </NavLink>
//               </div>
//             </StyledSharedLoginContainer>
//           </StyledLogin>
//       }
//     </>
//   );
// }
//
// export default Login;
