import messageReducer from '../../reducers/messageReducers';
import {
  initMessages,
  createMessages,
  getInboxMsg,
  messageSent,
} from '../../actions/messagesAction';

let action;
let newState;

const initialState = {
  message: [],
  isSent: false,
  isLoading: false,
  closeModal: false,
};

const newMsg = {
  receiverEmail: 'chowoharuhhhnaa@gmail.com',
  subject: 'chowoharuhhhnaa',
  message: 'chowoharuhhhnaa',
};

describe('Message Reducer', () => {
  it(' should return Initial state for undefined prop types', () => {
    expect(messageReducer(undefined, { type: 'undefinedAction' })).toEqual({
      message: [],
      isSent: false,
      isLoading: false,
      closeModal: false,
    });
  });
  it('should handle action type INIT_MESSAGE', () => {
    action = initMessages(newMsg);
    newState = messageReducer(initialState, action);
    expect(newState).not.toEqual(initialState, action);
    expect(newState.message).not.toEqual(undefined);
    expect(newState.isLoading).toEqual(true);
  });
  it('should handle action type COMPOSE_MESSAGE', () => {
    action = createMessages(newMsg);
    newState = messageReducer(initialState, action);
    expect(newState).not.toEqual(initialState, action);
    expect(newState.isLoading).toEqual(false);
  });
  it('should handle action type GET_INBOX', () => {
    action = getInboxMsg();
    newState = messageReducer(initialState, action);
    expect(newState).not.toEqual(initialState, action);
    expect(newState.isLoading).toEqual(false);
  });
  it('should handle action type MESSAGE_SENT', () => {
    action = messageSent();
    newState = messageReducer(initialState, action);
    expect(newState).not.toEqual(initialState, action);
    expect(newState.isLoading).toEqual(false);
  });
  it('should handle action type MESSAGE_NOT_SENT', () => {
    newState = messageReducer(initialState, {
      type: 'MESSAGE_NOT_SENT',
    });
    expect(newState).toEqual(initialState, action);
    expect(newState.isLoading).toEqual(false);
  });
  it('should handle action type  END_COMPOSE_MESSAGE', () => {
    newState = messageReducer(initialState, {
      type: 'END_COMPOSE_MESSAGE',
    });
    expect(newState).toEqual(initialState, action);
  });
});
