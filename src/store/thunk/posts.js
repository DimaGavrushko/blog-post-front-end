import { API_URL } from "../../constants/api";
import { ApiService } from "../../utils/apiService";
import {
  catchError,
  startLoadCategoriesAndPosts,
  handleSuccessLoadCategoriesAndPosts,
  startCreatePost,
  handleSuccessCreatePost,
  handleSuccessReactToPost,
  handleSuccessApprovePost,
  handleDeletePost
} from "../actions/posts";
import { addNotification } from "../actions/notifications";
import { push } from "connected-react-router";
import { PROFILE_PATH } from "../../constants/routes";
import { TYPE_DANGER, TYPE_SUCCESS } from "../../constants/notifications";

const apiService = new ApiService(API_URL + "/posts");

export const loadInitData = loggedUser => async dispatch => {
  try {
    dispatch(startLoadCategoriesAndPosts());
    const categories = await apiService.get("categories");
    const posts = await apiService.get("approved");
    let notApprovedPosts = [];
    if (loggedUser.role === "admin" || loggedUser.role === "journalist") {
      notApprovedPosts = await apiService.get("notApproved");
    }
    dispatch(
      handleSuccessLoadCategoriesAndPosts({
        categories,
        posts,
        notApprovedPosts
      })
    );
  } catch (error) {
    dispatch(catchError({ error }));
  }
};

export const like = (postId, userId, hasDislike = false) => async dispatch => {
  try {
    let post;
    post = await apiService.post("like", { postId, userId });
    if (hasDislike) {
      post = await apiService.post("undislike", { postId, userId });
    }
    dispatch(handleSuccessReactToPost({ post }));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};

export const unlike = (postId, userId) => async dispatch => {
  try {
    const post = await apiService.post("unlike", { postId, userId });
    dispatch(handleSuccessReactToPost({ post }));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};

export const dislike = (postId, userId, hasLike = false) => async dispatch => {
  try {
    let post;
    post = await apiService.post("dislike", { postId, userId });
    if (hasLike) {
      post = await apiService.post("unlike", { postId, userId });
    }
    dispatch(handleSuccessReactToPost({ post }));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};

export const undislike = (postId, userId) => async dispatch => {
  try {
    const post = await apiService.post("undislike", { postId, userId });
    dispatch(handleSuccessReactToPost({ post }));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};

export const createPost = postData => async dispatch => {
  try {
    dispatch(startCreatePost());
    const post = await apiService.put("createPost", postData, {}, true);
    dispatch(handleSuccessCreatePost({ post }));
    dispatch(push(PROFILE_PATH.replace(":id", postData.get("authorId"))));
    dispatch(
      addNotification({
        message: `Post sent for confirmation by the administration.`,
        notificationType: TYPE_SUCCESS
      })
    );
  } catch (error) {
    dispatch(catchError({ error }));
    dispatch(addNotification({
      message: error.message,
      notificationType: TYPE_DANGER
    }));
  }
};

export const approvePost = postId => async dispatch => {
  try {
    const post = await apiService.post("approve", { postId });
    dispatch(handleSuccessApprovePost({ post }));
    dispatch(
      addNotification({
        message: `Post successfully approved.`,
        notificationType: TYPE_SUCCESS
      })
    );
  } catch (error) {
    dispatch(catchError({ error }));
    dispatch(addNotification({
      message: error.message,
      notificationType: TYPE_DANGER
    }));
  }
};

export const deletePost = (postId, authorId = "") => async dispatch => {
  try {
    const res = await apiService.delete("", { postId });
    if (res) {
      dispatch(handleDeletePost({ postId }));
      if (authorId) {
        dispatch(push(PROFILE_PATH.replace(":id", authorId)));
      }
      dispatch(
        addNotification({
          message: `Post successfully deleted.`,
          notificationType: TYPE_SUCCESS
        })
      );
    } else {
      throw new Error(`Can not delete post with id=${postId}`);
    }
  } catch (error) {
    dispatch(catchError({ error }));
    dispatch(addNotification({
      message: error.message,
      notificationType: TYPE_DANGER
    }));
  }
};
