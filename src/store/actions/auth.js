import { auth } from "./types";

export const catchError = ({ error }) => ({
  type: auth.CATCH_ERROR,
  payload: {
    error
  }
});

export const catchTryAuthError = () => ({
  type: auth.CATCH_TRY_AUTH_ERROR
});

export const handleSuccessLogin = ({ user }) => ({
  type: auth.HANDLE_SUCCESS_LOGIN,
  payload: {
    user
  }
});

export const handleSuccessLogout = () => ({
  type: auth.HANDLE_SUCCESS_LOG_OUT
});

export const handleChangeAuthUserInfo = ({ user }) => ({
  type: auth.HANDLE_CHANGE_AUTH_USER_INFO,
  payload: {
    user
  }
});

export const startLogin = () => ({ type: auth.START_LOGIN });
