import React, { Fragment } from 'react';
import classnames from 'classnames';
import Logo from '../logo/logo';
import InputFields from '../input/input';
// eslint-disable-next-line import/no-cycle
import SignUp from '../../views/signup/signUp';
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
  }

  onChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
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
        <form name="epic-sign" className="bxx box" id="bxx">
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

export default SignIn;
