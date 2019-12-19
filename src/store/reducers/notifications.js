import { notifications as notificationActions } from "../actions/types";

const initialState = [];

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case notificationActions.ADD_NOTIFICATION:
      return [action.payload];
    case notificationActions.REMOVE_NOTIFICATION:
      return state.filter(notification => notification.id !== action.id);
    default:
      return state;
  }
};

export default notifications;
