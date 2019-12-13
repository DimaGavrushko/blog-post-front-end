import { push } from "connected-react-router";
import {
  handleSuccessLogin,
  catchError,
  startLogin,
  catchTryAuthError,
  handleSuccessLogout
} from "../actions/auth";
import { API_URL } from "../../constants/api";
import { ApiService } from "../../utils/apiService";
import { NEWS_PATH, PATH_INDEX } from "../../constants/routes";
import { loadInitData } from "./posts";

const apiService = new ApiService(API_URL + "/auth");

export const login = ({ email, password }) => async dispatch => {
  try {
    dispatch(startLogin());
    const user = await apiService.post("login", { email, password });
    dispatch(handleSuccessLogin({ user }));
    dispatch(push(NEWS_PATH));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};

export const tryAuthentication = () => async dispatch => {
  try {
    dispatch(startLogin());
    const user = (await apiService.get("tryAuth")) || {
      role: "guest"
    };
    dispatch(loadInitData(user));
    dispatch(handleSuccessLogin({ user }));
  } catch (error) {
    dispatch(catchTryAuthError());
  }
};

export const logout = () => async dispatch => {
  try {
    await apiService.get("logout", {}, false);
    dispatch(handleSuccessLogout());
    dispatch(push(PATH_INDEX));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};
