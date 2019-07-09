import { Actions } from "react-native-router-flux";

export function login(data) {
  return (dispatch, getstate) => {
    //eslint-disable-line
    dispatch({ type: "LOGIN_REQUEST" });
    fetch(`${baseUrl}/Login/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: responseJson
        });
      })
      .catch(error => {
        dispatch({ type: "LOGIN_FAIL" });
      });
  };
}

export function logout() {
  return (dispatch, getState) => {
    dispatch({ type: "LOGOUT" });
    Actions.auth();
  };
}
