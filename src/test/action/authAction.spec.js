/* eslint-disable arrow-parens */
import { registerUser, loginUser } from '../../actions/authAction';
import { SET_CURRENT_USER } from '../../actions/types';
import { mock, mockStore } from '../../../mocks/mockConfig';

const store = mockStore({
  auth: {},
  errors: {},
});

const mockUser = {
  firstName: 'Ochowo',
  lastName: 'Jones',
  userName: 'gr',
  email: 'pricjhgess@gmail.com',
  password: 'password',
  confirmPassword: 'password',
};

const userData = {
  email: 'pricjhgess@gmail.com',
  password: 'password',
};

const history = { push: jest.fn() };

describe('authAction', () => {
  it('should decode user token when registerUser is successful', done => {
    mock.onPost().replyOnce(201);
    store
      .dispatch(registerUser(mockUser, history))
      .then(() => store.getActions())
      .then(actions => {
        expect(actions.length).toBe(2);
        expect(actions[0].type).toBe(SET_CURRENT_USER);
      });
    done();
  });

  it('should login a user', done => {
    mock.onPost().replyOnce(200, {
      data: [
        {
          id: 24,
          firstName: 'ochowo',
          lastName: 'Jones',
          email: 'princess@gmail.com',
          userName: 'gr',

          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJlbWFpbCI6InByaW5jZXNzQGdtYWlsLmNvbSIsInVzZXJOYW1lIjoiZ3IiLCJpYXQiOjE1NjI1Mjg2NTcsImV4cCI6MTU2MzEzMzQ1N30.oWthtPvSh-zz4RwgHZsJtdxpjhHlUKix0oK1I9nqkOA',
        },
      ],
    });
    store
      .dispatch(loginUser(userData, history))
      .then(() => store.getActions())
      .then(actions => {
        expect(actions.length).toBe(1);
        expect(actions[0].type).toBe(SET_CURRENT_USER);
      });
    done();
  });
  it(' should Login error', () => {
    mock.onPost().replyOnce(400);

    return store.dispatch(loginUser({})).catch(() => {
      const expectedActions = SET_CURRENT_USER;
      const dispatchedAction = store.getActions();
      const actionTypes = dispatchedAction.map(action => action.type);

      expect(actionTypes).toEqual(expectedActions);
    });
  });
});
