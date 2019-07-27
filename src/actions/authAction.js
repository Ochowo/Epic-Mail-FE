/* eslint-disable no-unused-vars */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER, LOADING, INIT_AUTH } from './types';
// Set loged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const loading = () => ({
  type: LOADING,
});
export const InitAuth = () => ({
  type: LOADING,
});
export const setErrors = error => ({
  type: GET_ERRORS,
  payload: error.response.data,
});

// Register
export const registerUser = (newUser, history) => async (dispatch) => {
  try {
    dispatch(loading());
    const user = await axios.post('https://epic-mail04.herokuapp.com/api/v1/auth/signup', newUser);
    dispatch(InitAuth());
    if (user) {
      console.log(user);
      // Save to local storage
      const token = user.data.data[0].userToken;

      // Set token to local storage
      localStorage.setItem('token', token);

      // Set token to header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwtDecode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
      // history.push('/inbox');
    }
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

// Login - Get User Token
export const loginUser = newUser => async (dispatch) => {
  try {
    dispatch(loading());
    const user = await axios.post('https://epic-mail04.herokuapp.com/api/v1/auth/login', newUser);
    if (user) {
      // Save to local storage
      const { token } = user.data.data[0];
      // Set token to local storage
      localStorage.setItem('token', token);

      // Set token to header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwtDecode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

// log out user

export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem('token');
  // Remove auth header for future request
  setAuthToken(false);
  // set current user and is Authenticated to false
  dispatch(setCurrentUser({}));
  window.location.href = '/';
};
