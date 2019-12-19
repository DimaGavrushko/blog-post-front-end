import { notifications as notificationActions } from "./types";
import uuidv1 from "uuid";

export const addNotification = ({ message, notificationType }) => ({
  type: notificationActions.ADD_NOTIFICATION,
  payload: {
    message,
    notificationType,
    isOpen: true,
    id: uuidv1()
  }
});

/**
 * @action profileRequest
 * @params {String} id
 */
export const removeNotification = id => ({
  type: notificationActions.REMOVE_NOTIFICATION,
  id
});
