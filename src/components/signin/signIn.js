/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import InputFields from '../input/input';
// eslint-disable-next-line import/no-cycle
import SignUp from '../../views/signup/signUp';

import { loginUser } from '../../actions/authAction';
// eslint-disable-next-line import/no-cycle
import ResetPassword from '../../views/resetpassword/resetPassword';
import Title from '../title/title';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      email: '',
      password: '',
      reset: false,
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.showForm = this.showForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/inbox');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(newUser, this.props.history);
  }

  showForm() {
    console.log('hallos');
    this.setState({ show: false });
  }

  resetForm() {
    console.log('hallosuuu');
    this.setState({ reset: true });
  }

  render() {
    const { show, reset, email, password } = this.state;
    const { errors } = this.state;
    let displayError;
    if (errors.error) {
      // onsole.log(errors.error);
      displayError = errors.error;
    }
    if (show && reset) {
      return <ResetPassword />;
    }
    if (!show && !reset) {
      return <SignUp />;
    }
    return (
      <Fragment>
        <form name="epic-sign" className="bxx box" id="bxx" onSubmit={this.onSubmit}>
          <Logo />
          <Title title="Sign in to use Epic Mail" />
          <InputFields
            className={classnames('input email3', {
              'is-invalid': displayError,
            })}
            id="email3"
            type="text"
            name="email"
            value={email}
            onChange={e => this.onChange(e)}
          />
          {displayError && <div className="feedback">{displayError.email}</div>}
          <InputFields
            className={classnames('input pass3', {
              'is-invalid': displayError,
            })}
            id="pass3"
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password here"
            onChange={e => this.onChange(e)}
          />
          {displayError && <div className="feedback">{displayError.password}</div>}
          <InputFields type="submit" className="logbtn" value="Login" />
          <div className="acct" id="forg" onClick={this.resetForm} role="presentation">
            Forgot Password
          </div>
          <button type="button" className="create" id="loggg" onClick={this.showForm}>
            {' '}
            Create an account
          </button>
        </form>
      </Fragment>
    );
  }
}

loginUser.prototype = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { loginUser },
)(withRouter(SignIn));
