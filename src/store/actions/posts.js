import { posts } from "./types";

export const catchError = ({ error }) => ({
  type: posts.CATCH_ERROR,
  payload: {
    error
  }
});

export const startLoadCategoriesAndPosts = () => ({ type: posts.START_LOAD_CATEGORIES_AND_POSTS });

export const handleSuccessLoadCategoriesAndPosts = ({ posts, categories }) => ({
  type: posts.HANDLE_SUCCESS_LOAD_CATEGORIES_AND_POSTS,
  payload: {
    posts,
    categories
  }
});