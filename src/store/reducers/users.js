import { users } from "../actions/types";

const initialState = {
  instances: [],
  latestError: null,
  isLoading: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case users.START_LOAD_USER: {
      return {
        ...state,
        isLoading: true
      };
    }

    case users.CATCH_ERROR: {
      const { error, errorType } = action.payload;

      return {
        ...state,
        isLoading: false,
        latestError: {
          message: error.message,
          type: errorType
        }
      };
    }

    case users.DISMISS_ERROR: {
      return {
        ...state,
        latestError: null
      };
    }

    case users.HANDLE_SUCCESS_LOAD_USER: {
      const { user } = action.payload;
      const idx = state.instances.findIndex(el => el._id === user._id);
      if (idx === -1) {
        state.instances.push(user);
      }

      return {
        ...state,
        isLoading: false,
        latestError: null,
        instances: [...state.instances]
      };
    }

    case users.HANDLE_SUCCESS_CHANGE_USER_INFO: {
      const { user } = action.payload;
      const instances = [...state.instances];
      const idx = instances.findIndex(el => el._id === user._id);

      if (idx !== -1) {
        instances.splice(idx, 1);
      }

      instances.push(user);

      return {
        ...state,
        instances,
        latestError: null
      };
    }

    default:
      return state;
  }
};
