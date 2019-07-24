/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
  GET_ERRORS,
  COMPOSE_MESSAGE,
  INIT_MESSAGE,
  MESSAGE_SENT,
  MESSAGE_NOT_SENT,
  END_COMPOSE_MESSAGE,
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
    dispatch(createMessages(message.data));
    dispatch(messageSent());
    setTimeout(() => {
      dispatch({ type: END_COMPOSE_MESSAGE });
    }, 1000);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
    dispatch({
      type: MESSAGE_NOT_SENT,
    });
  }
};
