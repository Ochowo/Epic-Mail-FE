import nock from 'nock';
import { createMessages, postMessages, getInbox } from '../../actions/messagesAction';
import {
  GET_ERRORS,
  COMPOSE_MESSAGE,
  INIT_MESSAGE,
  MESSAGE_SENT,
  MESSAGE_NOT_SENT,
  END_COMPOSE_MESSAGE,
  GET_INBOX,
  INIT_INBOX,
} from '../../actions/types';
import { mock, mockStore } from '../../../mocks/mockConfig';

const store = mockStore({});
const mockMsg = {
  receiverEmail: 'pricjhgess@gmail.com',
  subject: 'password',
  message: 'password',
};

const token = 'token';
const history = { push: jest.fn() };

describe('messageAction', () => {
  it('call post message action success', (done) => {
    mock.onPost().replyOnce(201);
    store
      .dispatch(postMessages(mockMsg))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(3);
        expect(actions[0].type).toBe(INIT_MESSAGE);
      });
    done();
  });

  it('call post message action success', (done) => {
    mock.onPost().replyOnce(201);
    store
      .dispatch(postMessages(mockMsg))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(6);
        expect(actions[1].type).toBe(COMPOSE_MESSAGE);
      });
    done();
  });
  it('call get message action success', (done) => {
    mock.onPost().replyOnce(200);
    store
      .dispatch(getInbox())
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(7);
      });
    done();
  });
  //   it('should login a user', (done) => {
  //     mock.onPost().replyOnce(200, {
  //       data: [
  //         {
  //           id: 24,
  //           firstName: 'ochowo',
  //           lastName: 'Jones',
  //           email: 'princess@gmail.com',
  //           userName: 'gr',

  //           token:
  //             'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6InByaW5jZXNzQGdtYWlsLmNvbSIsInVzZXJOYW1lIjoiZ3IiLCJpYXQiOjE1NjI1Mjg2NTcsImV4cCI6MTU2MzEzMzQ1N30.oWthtPvSh-zz4RwgHZsJtdxpjhHlUKix0oK1I9nqkOA',
  //         },
  //       ],
  //     });
  //     store
  //       .dispatch(loginUser(userData, history))
  //       .then(() => store.getActions())
  //       .then((actions) => {
  //         expect(actions.length).toBe(1);
  //         expect(actions[0].type).toBe(SET_CURRENT_USER);
  //       });
  //     done();
  //   });
  //   it(' should Login error', () => {
  //     mock.onPost().replyOnce(400);

  //     return store.dispatch(loginUser({})).catch(() => {
  //       const expectedActions = SET_CURRENT_USER;
  //       const dispatchedAction = store.getActions();
  //       const actionTypes = dispatchedAction.map(action => action.type);

  //       expect(actionTypes).toEqual(expectedActions);
  //     });
  //   });

  //   it('should decode user token when registerUser is successful', (done) => {
  //     nock('https://epic-mail04.herokuapp.com')
  //       .post('/api/v1/messages')
  //       .reply(201);
  //     store.dispatch(postMessages(mockMsg, history)).then(() => {
  //       expect(store.getActions()).toMatchSnapshot();
  //       done();
  //     });
  //   });

  //   it('should decode user token when registerUser is successful', (done) => {
  //     const errorMessage = 'This username is already in use';
  //     nock('https://freyja-ah-backend.herokuapp.com')
  //       .post('/api/users')
  //       .reply(400, { error: errorMessage });
  //     store.dispatch(registerUser({})).then(() => {
  //       expect(store.getActions()).toMatchSnapshot();
  //       done();
  //     });
  //   });

  //   it('Logs in a user', () => {
  //     nock('https://localhost:3000')
  //       .post('/api/users', userData)
  //       .reply();

  //     return store.dispatch(postMessages(userData)).then(() => {
  //       const expectedActions = ['INIT_AUTH_REQUEST', 'END_AUTH_REQUEST', 'SET_CURRENT_USER'];

  //       const dispatchedAction = store.getActions();
  //       const actionTypes = dispatchedAction.map(action => action.type);

  //       expect(actionTypes).toEqual(expectedActions);
  //     });
  //   });

  //   it('Logs in a user', () => {
  //     nock('https://localhost:3000')
  //       .post('/api/users', {})
  //       .replyWithError();

  //     return store.dispatch(loginUser({})).catch(() => {
  //       const expectedActions = ['END_AUTH_REQUEST', 'LOGIN_ERROR'];
  //       const dispatchedAction = store.getActions();
  //       const actionTypes = dispatchedAction.map(action => action.type);

  //       expect(actionTypes).toEqual(expectedActions);
  //     });
  //   });
});
