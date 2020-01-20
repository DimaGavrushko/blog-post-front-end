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
import { handleLoadNotApprovedPosts } from "../actions/posts";

const authApiService = new ApiService(API_URL + "/auth");
const postsApiService = new ApiService(API_URL + "/posts");

export const login = ({
  email,
  password,
  categories = []
}) => async dispatch => {
  try {
    dispatch(startLogin());
    const user = await authApiService.post("login", { email, password });
    let notApprovedPosts = [];
    if (user.role === "admin" || user.role === "journalist") {
      notApprovedPosts = await postsApiService.get("notApproved");
      dispatch(handleLoadNotApprovedPosts({ notApprovedPosts }));
    }
    dispatch(handleSuccessLogin({ user }));
    if (!categories.length) {
      dispatch(loadInitData(user));
    }
    dispatch(push(NEWS_PATH));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};

export const tryAuthentication = () => async dispatch => {
  let user = { role: "guest" };

  try {
    dispatch(startLogin());
    user = await authApiService.get("tryAuth");
    dispatch(handleSuccessLogin({ user }));
  } catch (error) {
    dispatch(catchTryAuthError());
  } finally {
    dispatch(loadInitData(user));
  }
};

export const logout = () => async dispatch => {
  try {
    await authApiService.get("logout", {}, false);
    dispatch(handleSuccessLogout());
    dispatch(push(PATH_INDEX));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};
