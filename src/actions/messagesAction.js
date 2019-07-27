/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
  GET_ERRORS,
  COMPOSE_MESSAGE,
  INIT_MESSAGE,
  MESSAGE_SENT,
  MESSAGE_NOT_SENT,
  END_COMPOSE_MESSAGE,
  GET_INBOX,
  INIT_INBOX,
  LOADING,
} from './types';

const token = localStorage.getItem('token');

export const initMessages = () => ({
  type: INIT_MESSAGE,
});

export const createMessages = message => ({
  type: COMPOSE_MESSAGE,
});

export const messageSent = () => ({
  type: MESSAGE_SENT,
});

export const getInboxMsg = inbox => ({
  type: GET_INBOX,
  payload: inbox,
});

export const getInbox = () => async (dispatch) => {
  const config = {
    headers: {
      'x-access-token': token,
    },
  };
  try {
    dispatch({
      type: LOADING,
    });
    const message = await axios.get('https://epic-mail04.herokuapp.com/api/v1/messages', config);
    dispatch({
      type: INIT_INBOX,
    });
    const { inbox } = message.data.data;
    dispatch(getInboxMsg(message.data.data));
  } catch (err) {
    dispatch({
      type: MESSAGE_NOT_SENT,
      payload: err.response.data,
    });
  }
};

// eslint-disable-next-line import/prefer-default-export
export const postMessages = data => async (dispatch) => {
  dispatch(initMessages());
  const config = {
    headers: {
      'x-access-token': token,
    },
  };
  try {
    const message = await axios.post(
      'https://epic-mail04.herokuapp.com/api/v1/messages',
      data,
      config,
    );
    const msg = message.data;
    dispatch(createMessages(msg));
    dispatch(messageSent());
    setTimeout(() => {
      dispatch({ type: END_COMPOSE_MESSAGE });
    }, 1000);
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
    setTimeout(() => {
      dispatch({ type: END_COMPOSE_MESSAGE });
    }, 5000);
  }
};
