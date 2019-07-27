/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';

import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../components/navbar/navBar';
import ComposeMessage from '../../components/composeMessage/compose';
import InboxMsg from './inbox';
import Footer from '../../components/footer/footer';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'false',
    };
    this.openModalHandler = this.openModalHandler.bind(this);
    this.closeModalHandler = this.closeModalHandler.bind(this);
  }

  componentDidMount() {
    const { auth } = this.props;
    const { isAuthenticated } = auth;
    const { history } = this.props;
    // eslint-disable-next-line react/prop-types
    const { push } = history;
    if (isAuthenticated === false) {
      push('/');
    }
  }

  openModalHandler() {
    this.setState({
      show: true,
    });
  }

  closeModalHandler() {
    this.setState({
      show: false,
    });
  }

  render() {
    if (this.state.show === true) {
      return (
        <Fragment>
          <Navbar />
          <section className="top-sec2">
            <div className="container2 tainn" id="rott">
              <div className="lef-bo shok">
                <ul className="em-bnn" id="myTopnav">
                  <li>
                    <button
                      className="create cree cs"
                      id="create"
                      type="button"
                      onClick={this.openModalHandler}
                    >
                      Compose
                    </button>
                  </li>
                  <li>
                    <a href="https://epic-mail04.herokuapp.com/user.html">Inbox</a>
                    {' '}
                    <button className="em-btn" type="button" />
                  </li>
                  <li>
                    <span className="seent">Sent</span>
                  </li>
                  <li>
                    <span className="unr">Unread</span>
                  </li>
                  <li>
                    <h4 className="grp"> My Groups</h4>
                  </li>
                  <li>
                    <div id="table" />
                  </li>
                  <li>
                    <span className="cr-grppp">
                      <a href="nhttps://epic-mail04.herokuapp.com/ew.html">
                        <span className="plus">+</span>
                        <span className="crrr">Create group</span>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <ComposeMessage close={this.closeModalHandler} />
            </div>
          </section>
          <Footer />
        </Fragment>
      );
    }
    return (
      <Fragment>
        <Navbar />
        <section className="top-sec2">
          <div className="container2 tainn" id="rott">
            <div className="lef-bo shok">
              <ul className="em-bnn" id="myTopnav">
                <li>
                  <button
                    className="create cree cs"
                    id="create"
                    type="button"
                    onClick={this.openModalHandler}
                  >
                    Compose
                  </button>
                </li>
                <li>
                  <a href="https://epic-mail04.herokuapp.com/user.html">Inbox</a>
                  {' '}
                  <button className="em-btn" type="button" />
                </li>
                <li>
                  <span className="seent">Sent</span>
                </li>
                <li>
                  <span className="unr">Unread</span>
                </li>
                <li>
                  <h4 className="grp"> My Groups</h4>
                </li>
                <li>
                  <div id="table" />
                </li>
                <li>
                  <span className="cr-grppp">
                    <a href="nhttps://epic-mail04.herokuapp.com/ew.html">
                      <span className="plus">+</span>
                      <span className="crrr">Create group</span>
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="righ-bo baz">
              <InboxMsg />
            </div>
          </div>
        </section>

        <Footer />
      </Fragment>
    );
  }
}

User.propTypes = {
  auth: PropTypes.shape({ root: PropTypes.string, isAuthenticated: PropTypes.bool }),
  history: PropTypes.shape({ root: PropTypes.string }),
};
const mapStateToProps = state => ({
  auth: state.auth,
});

export { User };

export default connect(mapStateToProps)(User);
