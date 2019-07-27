/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-cycle */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authAction';
import Logo from '../../components/logo/logo';
import Title from '../../components/title/title';
import InputFields from '../../components/input/input';
import SignIn from '../../components/signin/signIn';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.loginForm = this.loginForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   console.log('signup');
  //   if (this.props.isAuthenticated) {
  //     this.props.history.push('/dashboard');
  //   }
  // }

  componentWillReceiveProps(nextProps) {
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };

    this.props.registerUser(newUser, this.props.history);
  }

  loginForm() {
    this.setState({ login: false });
  }

  render() {
    const { login } = this.state;
    const { errors } = this.state;
    let displayError;
    let valError;
    const err = errors.error;
    const { isAuthenticated } = this.props.auth;
    if (!isAuthenticated) {
      if (typeof err === 'string') {
        valError = errors.error;
      } else {
        displayError = errors.error;
      }
    }
    if (login) {
      return (
        <Fragment>
          <form name="epic-sign" className="box bxx" onSubmit={this.onSubmit}>
            <Logo />
            <Title
              title="
          Register on Epic Mail"
            />
            {valError && <div className="feedback">{valError}</div>}
            <InputFields
              className={classnames('input name1 name2', {
                'is-invalid': displayError,
              })}
              id="fname"
              type="text"
              placeholder="First name"
              name="firstName"
              value={this.state.firstName}
              onChange={e => this.onChange(e)}
            />
            <br />
            {displayError && <div className="feedback">{displayError.firstName}</div>}
            <InputFields
              className={classnames('input name1 name2', {
                'is-invalid': displayError,
              })}
              id="lname"
              type="text"
              placeholder="Last name"
              name="lastName"
              value={this.state.lastName}
              onChange={e => this.onChange(e)}
            />
            <br />
            {displayError && <div className="feedback">{displayError.lastName}</div>}
            <InputFields
              id="ename"
              className="input name1 email2"
              type="text"
              placeholder="Enter Email"
              name="email"
              value={this.state.email}
              onChange={e => this.onChange(e)}
            />
            <br />
            {displayError && <div className="feedback">{displayError.email}</div>}
            <InputFields
              className={classnames('input submit name1 pass2', {
                'is-invalid': displayError,
              })}
              id="pname"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={this.state.password}
              onChange={e => this.onChange(e)}
            />
            <br />
            {displayError && <div className="feedback">{displayError.password}</div>}
            <InputFields
              className={classnames('input submit name1 cpass2', {
                'is-invalid': displayError,
              })}
              id="cname"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={e => this.onChange(e)}
            />
            <br />
            {displayError && <div className="feedback">{displayError.confirmPassword}</div>}
            <InputFields type="submit" className="logbtn" value="Sign up" />
            <button className="create name3" id="sigg" type="button" onClick={this.loginForm}>
              Login
            </button>
          </form>
        </Fragment>
      );
    }
    return <SignIn />;
  }
}
SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  auth: PropTypes.shape({
    root: PropTypes.string,
    errors: PropTypes.any,
    isAuthenticated: PropTypes.bool,
  }),
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});
export { SignUp };
export default connect(
  mapStateToProps,
  { registerUser },
)(withRouter(SignUp));
