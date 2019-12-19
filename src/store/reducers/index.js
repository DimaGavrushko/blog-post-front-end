import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "./auth";
import users from "./users";
import posts from "./posts";
import notifications from "./notifications";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    users,
    posts,
    notifications
  });

export default createRootReducer;
