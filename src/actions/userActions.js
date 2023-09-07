import axios from "axios";

// Action types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

// Action creators
export const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuccess = (responseData) => {
  return {
    type: LOGIN_SUCCESS,
    payload: responseData,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

// Asynchronous action to handle user login
export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      // Make the API call to your backend to authenticate the user
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/login/",
        { username: email, password: password }
      );

      dispatch(loginSuccess(response.data));

      localStorage.setItem("userInfo", JSON.stringify(response.data));
    } catch (error) {
      // Dispatch loginFailure action if login fails
      dispatch(loginFailure("Login failed. Please try again."));
    }
  };
};
