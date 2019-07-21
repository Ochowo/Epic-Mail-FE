/* eslint-disable arrow-parens */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { registerUser } from '../../actions/authAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockUser = {
  firstName: 'Ochowo',
  lastName: 'Jones',
  email: 'princess@gmail.com',
  password: 'password',
  confirmPassword: 'password',
};

const history = { push: jest.fn() };

describe('authAction', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    // clear all HTTP mocks after each test
    nock.cleanAll();
  });

  it('should decode user token when registerUser is successful', done => {
    nock('https://epic-mail04.herokuapp.com')
      .post('/api/v1/auth/signup')
      .reply(201);
    store.dispatch(registerUser(mockUser, history)).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      done();
    });
  });

  //   it('should not decode user token when registerUser is not successful', done => {
  //     const errorMessage = 'This username is already in use';
  //     nock('https://epic-mail04.herokuapp.com')
  //       .post('/api/v1/auth/signup')
  //       .reply(400, { error: errorMessage });
  //     store.dispatch(registerUser({})).then(() => {
  //       expect(store.getActions()).toMatchSnapshot();
  //       done();
  //     });
  //   });
});
