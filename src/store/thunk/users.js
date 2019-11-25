import {
  startLoadUser,
  catchError,
  handleSuccessLoadUser
} from "../actions/users";
import { API_URL } from "../../constants/api";
import { ApiService } from "../../utils/apiService";

const apiService = new ApiService(API_URL + "/users");

export const loadUser = ({ id }) => async dispatch => {
  try {
    dispatch(startLoadUser());
    const user = await apiService.get(`${id}`);
    dispatch(handleSuccessLoadUser({ user }));
  } catch (error) {
    dispatch(catchError({ error }));
  }
};
