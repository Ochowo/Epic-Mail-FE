/* eslint-disable no-unused-vars */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER, LOADING } from './types';
// Set loged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const loading = () => ({
  type: LOADING,
});
export const setErrors = error => ({
  type: GET_ERRORS,
  payload: error.response.data,
});

// Register
export const registerUser = (newUser, history) => async (dispatch) => {
  try {
    const user = await axios.post('https://epic-mail04.herokuapp.com/api/v1/auth/signup', newUser);
    // dispatch(loading());
    if (user) {
      // console.log(user.data.data[0]);
      // Save to local storage
      const { userToken } = user.data.data[0];

      // Set token to local storage
      localStorage.setItem('token', userToken);

      // Set token to header
      setAuthToken(userToken);

      // Decode token to get user data
      const decoded = jwtDecode(userToken);

      // Set current user
      dispatch(setCurrentUser(decoded));
      history.push('/inbox');
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
  // axios
  //   .post('https://epic-mail04.herokuapp.com/api/v1/auth/signup', newUser)
  //   .then((res) => {
  //     console.log(res.data.data[0]);
  //     // Save to local storage
  //     const { userToken } = res.data.data[0];

  //     // Set token to local storage
  //     localStorage.setItem('token', userToken);

  //     // Set token to header
  //     setAuthToken(userToken);

  //     // Decode token to get user data
  //     const decoded = jwtDecode(userToken);

  //     // Set current user
  //     dispatch(setCurrentUser(decoded));
  //     history.push('/inbox');
  //   })
  //   .catch(err => dispatch({
  //     type: GET_ERRORS,
  //     payload: err.response.data,
  //   }));
};
