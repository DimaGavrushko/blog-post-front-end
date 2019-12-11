import { API_URL } from "../../constants/api";
import { ApiService } from "../../utils/apiService";
import {
  catchError,
  startLoadCategoriesAndPosts,
  handleSuccessLoadCategoriesAndPosts,
  startCreatePost,
  handleSuccessCreatePost
} from "../actions/posts";
import { push } from "connected-react-router";
import { NEWS_PATH } from "../../constants/routes";

const apiService = new ApiService(API_URL + "/posts");

export const loadInitData = () => async dispatch => {
  try {
    dispatch(startLoadCategoriesAndPosts());
    const categories = await apiService.get("categories");
    const posts = await apiService.get("approved");
    dispatch(handleSuccessLoadCategoriesAndPosts({ categories, posts }));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};

export const createPost = postData => async dispatch => {
  try {
    dispatch(startCreatePost());
    await apiService.put("createPost", postData, {}, true);
    dispatch(handleSuccessCreatePost());
    dispatch(push(NEWS_PATH));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};
