import { push } from "connected-react-router";
import {
  handleSuccessLogin,
  catchLoginError,
  startLogin, catchTryAuthError
} from "../actions/auth";
import { API_URL } from "../../constants/api";
import { ApiService } from "../../utils/apiService";
import { NEWS_PATH } from "../../constants/routes";

const apiService = new ApiService(API_URL + "/auth");

export const login = ({ email, password }) => async dispatch => {
  try {
    dispatch(startLogin());
    const user = await apiService.post("/login", { email, password });
    dispatch(handleSuccessLogin({ user }));
    dispatch(push(NEWS_PATH));
  } catch (error) {
    dispatch(catchLoginError({ error }));
  }
};

export const tryAuthentication = () => async dispatch => {
  try {
    dispatch(startLogin());
    const user = await apiService.get("/tryAuth");
    dispatch(handleSuccessLogin({ user }));
    dispatch(push(NEWS_PATH));
  } catch (error) {
    dispatch(catchTryAuthError());
  }
};
