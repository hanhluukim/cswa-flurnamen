import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";

/*
-Hier wird ein Fake Authorziation erstellt.
-für jede Aktion wird ein Service (fake Backend) durchgeführt
-kiene echte Response hier. Response wird selbst erstellt.
*/

export const register = (username, email, password) => (dispatch) => {
/*
die eingabe von Nutzer wird weiter an Service eingegeben
Bedingungen der Registrierung, Anmeldung wurden in der service definiert. Dann wird eine Response entsprechend erstellt.
*/
  var response = AuthService.register(username, email, password); //AuthService wird Registierung checken mit den gegebenen Variablen
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

  var resp = AuthService.login(username, password); //LOGIN SERVICE wird Nutzer ins lokalStorage hinzugfügen wenn message "success" ist

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
  AuthService.logout(); //im Autho service wird Nutzer aus dem localStorage entfernt

  dispatch({
    type: LOGOUT,
  });
};