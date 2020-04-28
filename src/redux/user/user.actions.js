// * payload here will be a user, so payload: user

export const setCurrentUser = (payload) => ({
  type: "SET_CURRENT_USER",
  payload,
});
