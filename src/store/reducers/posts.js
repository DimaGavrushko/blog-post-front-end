import { posts } from "../actions/types";

const initialState = {
  posts: [],
  notApprovedPosts: [],
  categories: [],
  latestAuthError: null,
  isLoading: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case posts.START_LOAD_CATEGORIES_AND_POSTS: {
      return {
        ...state,
        isLoading: true
      };
    }

    case posts.START_CREATE_POST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case posts.HANDLE_SUCCESS_CREATE_POST: {
      return {
        ...state,
        isLoading: false
      };
    }

    case posts.HANDLE_SUCCESS_LOAD_CATEGORIES_AND_POSTS: {
      let { posts, categories, notApprovedPosts } = action.payload;

      posts = posts.map(post => {
        return {
          ...post,
          categoryName: (
            categories.find(el => el._id === post.categoryId) || {}
          ).name
        };
      });

      notApprovedPosts = notApprovedPosts.map(post => {
        return {
          ...post,
          categoryName: (
            categories.find(el => el._id === post.categoryId) || {}
          ).name
        };
      });

      return {
        ...state,
        notApprovedPosts,
        isLoading: false,
        categories,
        posts
      };
    }

    case posts.CATCH_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        isLoadingCategories: false,
        latestError: error.message
      };
    }

    default:
      return state;
  }
};
