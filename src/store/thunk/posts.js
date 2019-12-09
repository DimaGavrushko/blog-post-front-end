import { API_URL } from "../../constants/api";
import { ApiService } from "../../utils/apiService";
import {
  catchError,
  startLoadCategoriesAndPosts,
  handleSuccessLoadCategoriesAndPosts
} from "../actions/posts";

const apiService = new ApiService(API_URL + "/posts");

export const loadCategoriesAndPosts = () => async dispatch => {
  try {
    dispatch(startLoadCategoriesAndPosts());
    const categories = await apiService.get('categories');
    const posts = await apiService.get('approved');
    dispatch(handleSuccessLoadCategoriesAndPosts({ categories, posts }));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};