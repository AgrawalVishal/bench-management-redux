import * as ActionTypes from "../ActionTypes";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case ActionTypes.SIGNUP_ERROR:
      return {
        ...state,
        isLoggedIn: false,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case ActionTypes.LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
export default AuthReducer;
