// @flow
const INITIAL_STATE = {
  loginData: null,
  loginLoader: false
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return Object.assign({}, state, {
        loginLoader: true
      });
    case "LOGIN_SUCCESS":
      return Object.assign({}, state, {
        loginData: action.payload,
        loginLoader: false
      });
    case "LOGIN_FAIL":
      return Object.assign({}, state, {
        loginLoader: false
      });
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default loginReducer;
