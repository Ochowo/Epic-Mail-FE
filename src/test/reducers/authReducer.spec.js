import authReducer from '../../reducers/authReducer';
import { setCurrentUser } from '../../actions/authAction';

let action;
let newState;

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
};

const newUser = {
  firstName: 'ochowo',
  lastName: 'haruna',
  userName: 'ooche',
  email: 'ochowoharuhhhnaa@gmail.com',
  password: 'passwordd',
  confirmPassword: 'passwordd',
};

describe('Auth Reducer', () => {
  it(' should return Initial state for undefined prop types', () => {
    expect(authReducer(undefined, { type: 'undefinedAction' })).toEqual({
      isLoading: false,
      isAuthenticated: false,
      user: {},
    });
  });
  it('should handle action type SET_CURRENT_USER', () => {
    action = setCurrentUser(newUser);
    newState = authReducer(initialState, action);
    expect(newState).not.toEqual(initialState, action);
    expect(newState.user).not.toEqual(undefined);
    expect(newState.isAuthenticated).toEqual(true);
  });
});
