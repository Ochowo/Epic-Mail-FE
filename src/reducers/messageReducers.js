import {
  COMPOSE_MESSAGE,
  INIT_MESSAGE,
  MESSAGE_SENT,
  MESSAGE_NOT_SENT,
  END_COMPOSE_MESSAGE,
  CLOSE_MODAL,
  GET_INBOX,
  INIT_INBOX,
} from '../actions/types';

const initialState = {
  message: [],
  isSent: false,
  isLoading: false,
  closeModal: false,
  auth: {
    isAuthenticated: false,
  },
};
export default function (state = initialState, action) {
  switch (action.type) {
    case INIT_MESSAGE:
      return {
        ...state,
        isLoading: true,
      };
    case COMPOSE_MESSAGE:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    case INIT_INBOX:
      return {
        ...state,
        isLoading: true,
      };
    case GET_INBOX:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    case MESSAGE_SENT:
      return {
        ...state,
        isSent: true,
        message: [],
      };
    case MESSAGE_NOT_SENT:
      return {
        ...state,
        isLoading: false,
        // message: [],
      };
    case END_COMPOSE_MESSAGE:
      return {
        ...state,
        isSent: false,
        isLoading: false,
        message: [],
      };
    case CLOSE_MODAL:
      return {
        ...state,
        closeModal: true,
      };
    default:
      return state;
  }
}
