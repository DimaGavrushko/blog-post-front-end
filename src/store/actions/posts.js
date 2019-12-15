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

export const handleSuccessLoadCategoriesAndPosts = ({
  posts,
  notApprovedPosts,
  categories
}) => ({
  type: postsTypes.HANDLE_SUCCESS_LOAD_CATEGORIES_AND_POSTS,
  payload: {
    posts,
    categories,
    notApprovedPosts
  }
});

export const handleLoadNotApprovedPosts = ({ notApprovedPosts }) => ({
  type: postsTypes.HANDLE_LOAD_NOT_APPROVED_POSTS,
  payload: {
    notApprovedPosts
  }
});

export const startCreatePost = () => ({
  type: postsTypes.START_CREATE_POST
});

export const handleSuccessCreatePost = () => ({
  type: postsTypes.HANDLE_SUCCESS_CREATE_POST
});

export const handleSuccessReactToPost = ({ post }) => ({
  type: postsTypes.HANDLE_SUCCESS_REACT_TO_POST,
  payload: {
    post
  }
});

export const handleDeletePost = ({ postId }) => ({
  type: postsTypes.HANDLE_DELETE_POST,
  payload: {
    postId
  }
});
