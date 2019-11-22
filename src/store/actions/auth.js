import { auth } from "./types";

export const catchLoginError = ({ error }) => ({
  type: auth.CATCH_LOGIN_ERROR,
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

export const startLogin = () => ({ type: auth.START_LOGIN });
