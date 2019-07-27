/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postMessages } from '../../actions/messagesAction';
import Logo from '../logo/logo';

class ComposeMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receiverEmail: '',
      subject: '',
      message: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit(e) {
    const { sendMessage } = this.props;
    e.preventDefault();
    const data = {
      receiverEmail: this.state.receiverEmail,
      subject: this.state.subject,
      message: this.state.message,
    };
    this.props.postMessages(data);
    sendMessage();
    this.setState({
      receiverEmail: '',
      subject: '',
      message: '',
    });
  }

  render() {
    const { loading, sent } = this.props;
    const { errors } = this.props;
    let displayError;
    if (errors.error) {
      displayError = errors.error;
    }
    return (
      <Fragment>
        <div className="center-boxxx" id="mmoo">
          <form className="box boxx" id="box25" onSubmit={this.onSubmit}>
            <span className="closed" onClick={this.props.close} role="presentation">
              &times;
            </span>
            <div className="logo-box">
              <Logo />
            </div>
            <h2 className="boxx-textt">Compose Message</h2>
            <input
              className="input name1 textt newt"
              id="receiverEmail"
              type="text"
              placeholder="To"
              name="receiverEmail"
              value={this.state.user}
              onChange={e => this.onChange(e)}
            />
            <br />
            {displayError && <div className="feedback">{displayError.receiverEmail}</div>}
            <input
              className="input name1 textt newt"
              id="subject"
              type="text"
              placeholder="Subject"
              name="subject"
              value={this.state.subject}
              onChange={e => this.onChange(e)}
            />
            <br />
            {displayError && <div className="feedback">{displayError.subject}</div>}
            <textarea
              rows="15"
              cols="30"
              className="teexs"
              id="message"
              placeholder="Enter message"
              name="message"
              value={this.state.message}
              onChange={e => this.onChange(e)}
            />
            {displayError && <div className="feedback">{displayError.message}</div>}
            <button className="create cree2 yh" id="newMessage" type="submit">
              {loading ? 'Loading...' : sent ? 'Message sent' : 'Send'}
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}
ComposeMessage.propTypes = {
  postMessages: PropTypes.func,
  message: PropTypes.shape({
    root: PropTypes.string,
    isSent: PropTypes.bool,
    isLoading: PropTypes.bool,
    closeModal: PropTypes.bool,
  }),
};
const mapStateToProps = state => ({
  message: state.message,
  errors: state.errors,
  loading: state.message.isLoading,
  sent: state.message.isSent,
});
export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    sendMessage: postMessages,
  },
  dispatch,
);
export { ComposeMessage };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ComposeMessage));
