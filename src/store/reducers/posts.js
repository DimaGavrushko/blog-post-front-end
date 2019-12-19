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
      let { post } = action.payload;

      post = {
        ...post,
        categoryName: (
          state.categories.find(el => el._id === post.categoryId) || {}
        ).name
      };
      const posts = [...state.posts];
      const notApprovedPosts = [...state.notApprovedPosts];
      let idx = posts.findIndex(el => el._id === post._id);

      if (idx !== -1) {
        posts.splice(idx, 1);
      } else {
        idx = notApprovedPosts.findIndex(el => el._id === post._id);
        if (idx !== -1) {
          notApprovedPosts.splice(idx, 1);
        }
      }

      notApprovedPosts.push(post);

      return {
        ...state,
        isLoading: false,
        posts,
        notApprovedPosts
      };
    }

    case posts.HANDLE_LOAD_NOT_APPROVED_POSTS: {
      let { notApprovedPosts } = action.payload;

      notApprovedPosts = notApprovedPosts.map(post => {
        return {
          ...post,
          categoryName: (
            state.categories.find(el => el._id === post.categoryId) || {}
          ).name
        };
      });

      return {
        ...state,
        notApprovedPosts
      };
    }

    case posts.HANDLE_SUCCESS_REACT_TO_POST: {
      const { post } = action.payload;

      let idx = state.posts.findIndex(el => el._id === post._id);
      state.posts[idx].likes = post.likes;
      state.posts[idx].dislikes = post.dislikes;

      return {
        ...state,
        posts: [...state.posts]
      };
    }

    case posts.HANDLE_SUCCESS_APPROVE_POST: {
      let { post } = action.payload;

      const posts = [...state.posts];
      const notApprovedPosts = [...state.notApprovedPosts];
      const idx = notApprovedPosts.findIndex(el => el._id === post._id);

      if (idx !== -1) {
        notApprovedPosts.splice(idx, 1);
      }

      posts.push({
        ...post,
        categoryName: (
          state.categories.find(el => el._id === post.categoryId) || {}
        ).name
      });

      return {
        ...state,
        posts,
        notApprovedPosts
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

    case posts.HANDLE_DELETE_POST: {
      const { postId } = action.payload;
      const posts = [...state.posts];
      const notApprovedPosts = [...state.notApprovedPosts];
      let idx = posts.findIndex(el => el._id === postId);

      if (idx !== -1) {
        posts.splice(idx, 1);
      } else {
        idx = notApprovedPosts.findIndex(el => el._id === postId);
        if (idx !== -1) {
          notApprovedPosts.splice(idx, 1);
        }
      }

      return {
        ...state,
        posts,
        notApprovedPosts
      };
    }

    case posts.CATCH_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        isLoading: false,
        latestError: error.message
      };
    }

    default:
      return state;
  }
};
