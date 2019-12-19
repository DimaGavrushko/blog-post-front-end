import {
  startLoadUser,
  catchError,
  handleSuccessLoadUser,
  handleSuccessChangeUserInfo
} from "../actions/users";
import { API_URL } from "../../constants/api";
import { ApiService } from "../../utils/apiService";
import { handleChangeAuthUserInfo } from "../actions/auth";
import { addNotification } from "../actions/notifications";
import { TYPE_DANGER, TYPE_SUCCESS } from "../../constants/notifications";

const apiService = new ApiService(API_URL + "/users");

export const loadUser = ({ id }) => async dispatch => {
  try {
    dispatch(startLoadUser());
    const user = await apiService.get(`${id}`);
    dispatch(handleSuccessLoadUser({ user }));
  } catch (error) {
    dispatch(catchError({ error }));
    dispatch(addNotification({
      message: error.message,
      notificationType: TYPE_DANGER
    }));
  }
};

export const changeUserInfo = (
  loggedUserId,
  userId,
  name,
  value
) => async dispatch => {
  try {
    const user = await apiService.post("updateProfile", {
      userId,
      name,
      value
    });
    if (userId === loggedUserId) {
      dispatch(handleChangeAuthUserInfo({ user }));
    }
    dispatch(handleSuccessChangeUserInfo({ user }));
  } catch (error) {
    dispatch(catchError({ error }));
    dispatch(addNotification({
      message: error.message,
      notificationType: TYPE_DANGER
    }));
  }
};

export const changePassword = (
  loggedUserId,
  userId,
  currentPassword,
  newPassword
) => async dispatch => {
  try {
    const user = await apiService.post("updatePassword", {
      userId,
      currentPassword,
      newPassword
    });
    if (userId === loggedUserId) {
      dispatch(handleChangeAuthUserInfo({ user }));
    }
    dispatch(handleSuccessChangeUserInfo({ user }));
    dispatch(
      addNotification({
        message: `Password successfully changed.`,
        notificationType: TYPE_SUCCESS
      })
    );
  } catch (error) {
    dispatch(catchError({ error }));
  }
};

export const changeUserPhoto = (loggedUserId, formData) => async dispatch => {
  try {
    const user = await apiService.post("updateAvatar", formData, {}, true);
    if (formData.get("userId") === loggedUserId) {
      dispatch(handleChangeAuthUserInfo({ user }));
    }
    dispatch(handleSuccessChangeUserInfo({ user }));
  } catch (error) {
    dispatch(catchError({ error }));
    dispatch(addNotification({
      message: error.message,
      notificationType: TYPE_DANGER
    }));
  }
};
