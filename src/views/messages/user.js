import React, { Fragment } from 'react';
import Navbar from '../../components/navbar/navBar';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      compose: 'false',
      inbox: 'true',
      sent: 'false',
    };
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <section className="top-sec2">
          <div className="container2 tainn" id="rott">
            <div className="lef-bo shok">
              <ul className="em-bnn" id="myTopnav">
                <li>
                  <button className="create cree cs" id="create" type="button">
                    <a href="#">Compose</a>
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
            <div className="righ-bo baz" />
          </div>
        </section>
      </Fragment>
    );
  }
}
export default User;
