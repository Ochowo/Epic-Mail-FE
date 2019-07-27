import errorsReducer from '../../reducers/errorsReducer';

let action;
let newState;

const initialState = {};

describe('Error Reducer', () => {
  it(' should return Initial state for undefined prop types', () => {
    expect(errorsReducer({}, { type: 'undefinedAction' })).toEqual({});
  });
  it('should handle action type GET_ERRORS', () => {
    newState = errorsReducer(initialState, {
      type: 'GET_ERRORS',
    });
    expect(newState).not.toEqual(initialState, action);
  });
});
