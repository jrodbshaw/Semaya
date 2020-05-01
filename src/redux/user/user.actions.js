// * payload here will be a user, so payload: user
import { UserActionTypes } from "./user.types";
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
