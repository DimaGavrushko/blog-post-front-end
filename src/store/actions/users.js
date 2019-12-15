import { users } from "./types";

export const startLoadUser = () => ({ type: users.START_LOAD_USER });

export const catchError = ({ error }) => ({
  type: users.CATCH_ERROR,
  payload: {
    error
  }
});

export const handleSuccessLoadUser = ({ user }) => ({
  type: users.HANDLE_SUCCESS_LOAD_USER,
  payload: {
    user
  }
});

export const handleSuccessChangeUserInfo = ({ user }) => ({
  type: users.HANDLE_SUCCESS_CHANGE_USER_INFO,
  payload: {
    user
  }
});

export const dismissError = () => ({
  type: users.DISMISS_ERROR
});
