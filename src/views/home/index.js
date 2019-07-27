import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../components/navbar/navBar';
import Landing from '../../components/landing/landing';
import Footer from '../../components/footer/footer';

class HomePage extends React.Component {
  // componentDidMount() {
  //   const { auth } = this.props;
  //   const { isAuthenticated } = auth;
  //   const { history } = this.props;
  //   // eslint-disable-next-line react/prop-types
  //   const { push } = history;
  //   if (isAuthenticated) {
  //     push('/inbox');
  //   } else {
  //     push('/');
  //   }
  // }

  render() {
    return (
      <Fragment>
        <Navbar />
        <Landing />
        <Footer />
      </Fragment>
    );
  }
}

HomePage.propTypes = {
  auth: PropTypes.shape({ root: PropTypes.string, isAuthenticated: PropTypes.bool }),
  history: PropTypes.shape({ root: PropTypes.string }),
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(HomePage);
