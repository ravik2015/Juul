import { combineReducers } from "redux";
import loginReducer from "../reducers/LoginReducer";
const appReducer = combineReducers({
  loginReducer
});

export default appReducer;
