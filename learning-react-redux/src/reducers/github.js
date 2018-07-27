export function githubReducer(
  prevState = { users: [], isLoading: false },
  action
) {
  switch (action.type) {
    case "GET_USERS":
      return { ...prevState, isLoading: true };
    case "LOAD_USERS":
      return { ...prevState, isLoading: false, users: action.users };
    default:
      return prevState;
  }
}
