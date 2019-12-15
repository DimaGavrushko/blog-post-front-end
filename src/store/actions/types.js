export const auth = {
  CATCH_TRY_AUTH_ERROR: "auth/CATCH_TRY_AUTH_ERROR",
  CATCH_ERROR: "auth/CATCH_ERROR",
  HANDLE_SUCCESS_LOGIN: "auth/HANDLE_SUCCESS_LOGIN",
  START_LOGIN: "auth/START_LOGIN",
  HANDLE_SUCCESS_LOG_OUT: "auth/HANDLE_SUCCESS_LOG_OUT"
};

export const users = {
  START_LOAD_USER: "users/START_LOAD_USER",
  HANDLE_SUCCESS_LOAD_USER: "users/HANDLE_SUCCESS_LOAD_USER",
  CATCH_ERROR: "users/CATCH_ERROR"
};

export const posts = {
  START_LOAD_CATEGORIES_AND_POSTS: "posts/START_LOAD_CATEGORIES_AND_POSTS",
  HANDLE_SUCCESS_LOAD_CATEGORIES_AND_POSTS:
    "posts/HANDLE_SUCCESS_LOAD_CATEGORIES_AND_POSTS",
  CATCH_ERROR: "posts/CATCH_ERROR",
  START_CREATE_POST: "posts/START_CREATE_POST",
  HANDLE_LOAD_NOT_APPROVED_POSTS: "posts/HANDLE_LOAD_NOT_APPROVED_POSTS",
  HANDLE_SUCCESS_CREATE_POST: "posts/HANDLE_SUCCESS_CREATE_POST",
  HANDLE_SUCCESS_REACT_TO_POST: "posts/HANDLE_SUCCESS_REACT_TO_POST",
  HANDLE_DELETE_POST: "posts/HANDLE_DELETE_POST"
};
