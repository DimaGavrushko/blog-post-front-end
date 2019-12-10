import { posts as postsTypes } from "./types";

export const catchError = ({ error }) => ({
  type: postsTypes.CATCH_ERROR,
  payload: {
    error
  }
});

export const startLoadCategoriesAndPosts = () => ({
  type: postsTypes.START_LOAD_CATEGORIES_AND_POSTS
});

export const handleSuccessLoadCategoriesAndPosts = ({ posts, categories }) => ({
  type: postsTypes.HANDLE_SUCCESS_LOAD_CATEGORIES_AND_POSTS,
  payload: {
    posts,
    categories
  }
});
