import { API_URL } from "../../constants/api";
import { ApiService } from "../../utils/apiService";
import {
  catchError,
  startLoadCategoriesAndPosts,
  handleSuccessLoadCategoriesAndPosts,
  startCreatePost,
  handleSuccessCreatePost,
  handleSuccessReactToPost,
  handleLoadNotApprovedPosts,
  handleDeletePost
} from "../actions/posts";
import { push } from "connected-react-router";
import { PROFILE_PATH } from "../../constants/routes";

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
  } catch (error) {
    dispatch(catchError({ error }));
  }
};

export const approvePost = postId => async dispatch => {
  try {
    await apiService.post("approve", { postId });
    const notApprovedPosts = await apiService.get("notApproved");
    dispatch(handleLoadNotApprovedPosts({ notApprovedPosts }));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};

export const deleteNotApprovedPost = postId => async dispatch => {
  try {
    const res = await apiService.delete("", { postId });
    if (res) {
      const notApprovedPosts = await apiService.get("notApproved");
      dispatch(handleLoadNotApprovedPosts({ notApprovedPosts }));
    } else {
      throw new Error(`Can not delete post with id=${postId}`);
    }
  } catch (error) {
    dispatch(catchError({ error }));
  }
};

export const deleteApprovedPost = postId => async dispatch => {
  try {
    const res = await apiService.delete("", { postId });
    if (res) {
      dispatch(handleDeletePost({ postId }));
    } else {
      throw new Error(`Can not delete post with id=${postId}`);
    }
  } catch (error) {
    dispatch(catchError({ error }));
  }
};
