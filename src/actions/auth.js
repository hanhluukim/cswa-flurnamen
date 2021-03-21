import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";

export const register = (username, email, password) => (dispatch) => {
  var response = AuthService.register(username, email, password);
  console.log(response);
  if (response.status==200){
    dispatch({
      type: REGISTER_SUCCESS,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: response.data.message,
    });
    return Promise.resolve();
  }
  else{
    dispatch({
      type: REGISTER_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: response.data.message,
    });
    return Promise.reject();
  }
};

export const login = (username, password) => (dispatch) => {

  var resp = AuthService.login(username, password);

  if (resp.data.message=="success"){
    console.log("Action");
    console.log(resp.data.auth.user);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: resp.data.auth.user},
    });

    return Promise.resolve();

  }
  else{
    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: resp.data.message,
    });

    return Promise.reject();

  };
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};