/* eslint-disable import/no-cycle */
import React from 'react';
import SignIn from '../../components/signin/signIn';
import Logo from '../../components/logo/logo';
import Title from '../../components/title/title';

// eslint-disable-next-line react/prefer-stateless-function
class Reset extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: true };
    this.loginForm = this.loginForm.bind(this);
  }

  loginForm() {
    this.setState({ login: false });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.login) {
      return (
        <form name="epic-sign" className="box bxx">
          <Logo />
          <Title
            title="
            Reset Your Password"
          />
          <span id="feedbackspe" />
          <input
            className="input name1"
            id="emai"
            type="text"
            placeholder="Enter Email"
            name="email"
          />
          <br />
          <span id="feedbacke" />
          <button type="button" className="logbtn name2">
            <span className="resetText">Submit</span>
            <span className="spinner" id="pion" />
          </button>
          <button type="button" className="create name3" id="logId" onClick={this.loginForm}>
            Login
          </button>
        </form>
      );
    }
    return <SignIn />;
  }
}
export default Reset;
