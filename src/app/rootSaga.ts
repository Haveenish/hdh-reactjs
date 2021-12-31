import { all } from "redux-saga/effects";
import weatherSaga from "features/weather/weatherSaga";

export default function* watcherSaga() {
  yield all([weatherSaga()]);
}
