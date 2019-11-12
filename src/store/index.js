import { createBrowserHistory as createHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import createRootReducer from "./reducers";

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(myRouterMiddleware, thunk);
  } else {
    return applyMiddleware(myRouterMiddleware, thunk);
  }
};

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(getMiddleware())
);
