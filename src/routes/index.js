import NotFound from "../layouts/NotFound";
import Login from "../layouts/Login";
import Root from "../layouts/Root";
import SignUp from "../layouts/SignUp";
import { PATH_INDEX, LOGIN_PATH, SIGN_UP_PATH } from "../constants/routes";

const routes = [
  {
    path: LOGIN_PATH,
    name: "Log in",
    component: Login,
    inHeader: true
  },
  {
    path: SIGN_UP_PATH,
    name: "Sign up",
    component: SignUp,
    inHeader: true
  },
  {
    path: PATH_INDEX,
    name: "Root",
    component: Root,
    inHeader: false
  },
  {
    path: "",
    name: "Not found",
    component: NotFound,
    inHeader: false
  }
];

export default routes;
