import { put, takeLatest } from "redux-saga/effects";
import { loadUsers } from "../actions/github";

function* getUsers() {
  let users = yield fetch("https://api.github.com/users").then(r => r.json());
  yield put(loadUsers(users));
}

export function* githubWatcher() {
  yield [takeLatest("GET_USERS", getUsers)];
}
