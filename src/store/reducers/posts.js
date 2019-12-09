import { posts } from "../actions/types";

const initialState = {
  posts: [],
  categories: [],
  latestAuthError: null,
  isLoadingCategories: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case posts.START_LOAD_CATEGORIES: {
      return {
        ...state,
        isLoadingCategories: true
      }
    }

    case posts.HANDLE_SUCCESS_LOAD_CATEGORIES: {
      const { categories } = action.payload;

      return {
        ...state,
        isLoadingCategories: false,
        categories
      }
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
