import { auth } from "../actions/types";

const initialState = {
  user: {
    role: "guest"
  },
  latestAuthError: null,
  isLoading: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case auth.START_LOGIN: {
      return {
        ...state,
        isLoading: true
      };
    }

    case auth.HANDLE_SUCCESS_LOGIN: {
      const { user } = action.payload;

      return {
        ...state,
        isLoading: false,
        user,
        latestAuthError: null
      };
    }

    case auth.CATCH_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        isLoading: false,
        latestAuthError: error.message
      };
    }

    case auth.CATCH_TRY_AUTH_ERROR: {
      return {
        ...state,
        user: {
          role: "guest"
        },
        isLoading: false,
        latestAuthError: null
      };
    }

    case auth.HANDLE_SUCCESS_LOG_OUT: {
      return {
        ...state,
        user: {
          role: "guest"
        },
        isLoading: false,
        latestAuthError: null
      };
    }

    case auth.HANDLE_CHANGE_AUTH_USER_INFO: {
      const { user } = action.payload;

      return {
        ...state,
        user
      };
    }

    default:
      return state;
  }
};
