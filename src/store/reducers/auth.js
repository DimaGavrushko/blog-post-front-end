import { auth } from "../actions/types";

const initialState = {
  user: null,
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

    case auth.CATCH_LOGIN_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        user: null,
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

    default:
      return state;
  }
};
