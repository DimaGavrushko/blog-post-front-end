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
      const { error } = action.payload;

      return {
        ...state,
        isLoading: false,
        latestError: error.message
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

    default:
      return state;
  }
};
