import { SET_CURRENT_USER, LOADING } from '../actions/types';
import isEmpty from '../validation/isEmpty';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
