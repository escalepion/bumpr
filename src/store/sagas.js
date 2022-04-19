import { all, fork } from "redux-saga/effects";

import InformationsSaga from "./informations/saga";

export default function* rootSaga() {
  yield all([fork(InformationsSaga)]);
}