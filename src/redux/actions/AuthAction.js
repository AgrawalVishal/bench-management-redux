import * as ActionTypes from "../ActionTypes";
import {
  RegisterUserService,
  LoginUserService,
} from "../../services/AuthService";

export const RegisterAction = (formData, navigate) => (dispatch) => {
  return RegisterUserService(formData).then(
    () => {
      try {
        dispatch({ type: ActionTypes.SIGNUP_SUCCESS });
        alert("Successfully sign up.");
        navigate("/sign-in");
      } catch (e) {
        alert("Sign up failed.");
      }
    },
    (error) => {
      dispatch({ type: ActionTypes.SIGNUP_ERROR, error });
    }
  );
};
export const LoginAction = (formData, navigate) => (dispatch) => {
  return LoginUserService(formData).then(
    (data) => {
      try {
        if (data.msg === "success") {
          localStorage.setItem("user", JSON.stringify(data.data));
          dispatch({
            type: ActionTypes.LOGIN_SUCCESS,
            payload: { user: data },
          });
          alert("Successfully login.");
          navigate("/home");
        } else {
          alert("Login failed.");
          dispatch({ type: ActionTypes.LOGIN_ERROR });
          window.location.reload();
        }
      } catch (e) {
        dispatch({ type: ActionTypes.LOGIN_ERROR });
      }
    },
    (error) => {
      dispatch({ type: ActionTypes.LOGIN_ERROR, error });
    }
  );
};
