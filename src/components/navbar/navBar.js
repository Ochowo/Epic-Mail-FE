import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from '../logo/logo';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    const { auth } = this.props;
    const { isAuthenticated } = auth;

    const guestLink = (
      <header className="header uyu">
        <nav className="nav">
          <span className="logo lo">
            <Link to="/https://epic-mail04.herokuapp.com">
              <Logo />
            </Link>
          </span>
          <span className="help">
            <Link to="/inbox">Need help?</Link>
          </span>
        </nav>
      </header>
    );

    const authLink = (
      <header className="header header2 header4">
        <nav className="nav">
          <div className="flexboxx">
            <div className="logo bak">
              <Link to="/https://epic-mail04.herokuapp.com">
                <Logo />
              </Link>
              {' '}
            </div>
            <div className="search-container">
              <form action="#">
                <input type="text" placeholder="Search inbox.." name="search" className="bor" />
                <button type="submit" className="top-subb">
                  <i className="fa fa-search top-sub" />
                </button>
              </form>
            </div>
            <div className="userp">
              <i className="fas fa-user-circle top-us" />
              <span className="usern" />
            </div>
            <button className="logout" type="submit">
              logout
            </button>
          </div>
        </nav>
      </header>
    );
    return <div>{isAuthenticated ? authLink : guestLink}</div>;
  }
}
Header.propTypes = {
  auth: PropTypes.shape({
    root: PropTypes.string,
    isAuthenticated: PropTypes.bool,
  }),
  errors: PropTypes.shape({ root: PropTypes.string }),
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Header);
