import axios from 'axios';

// Action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action creators
export const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuccess = (token) => {
  return { type: LOGIN_SUCCESS, payload: token };
};

export const loginFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error };
};

// Asynchronous action to handle user login
export const login = (username, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      // Make the API call to your backend to authenticate the user
      const response = await axios.post('http://127.0.0.1:8000/api/login/', { username, password });

      // Assuming the API returns the authentication token
      const token = response.data.token;

      // Dispatch loginSuccess action with the received token
      dispatch(loginSuccess(token));

      // Store the token in localStorage
      localStorage.setItem('token', token);
    } catch (error) {
      // Dispatch loginFailure action if login fails
      dispatch(loginFailure('Login failed. Please try again.'));
    }
  };
};
