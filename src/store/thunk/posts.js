import { API_URL } from "../../constants/api";
import { ApiService } from "../../utils/apiService";
import { catchError, handleSuccessLoadCategories, startLoadCategories } from "../actions/posts";

const apiService = new ApiService(API_URL + "/posts");

export const loadCategories = () => async dispatch => {
  try {
    dispatch(startLoadCategories());
    const categories = await apiService.get('categories');
    dispatch(handleSuccessLoadCategories({ categories }));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};
