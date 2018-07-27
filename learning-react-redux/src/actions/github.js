export function getUsers() {
  return { type: "GET_USERS" };
}

export function loadUsers(users) {
  return { type: "LOAD_USERS", users };
}
