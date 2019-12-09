import { posts } from "./types";

export const startLoadCategories = () => ({ type: posts.START_LOAD_CATEGORIES });

export const catchError = ({ error }) => ({
  type: posts.CATCH_ERROR,
  payload: {
    error
  }
});

export const handleSuccessLoadCategories = ({ categories }) => ({
  type: posts.HANDLE_SUCCESS_LOAD_CATEGORIES,
  payload: {
    categories
  }
});
