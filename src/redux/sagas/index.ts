import {all} from 'redux-saga/effects';
import {watchMessages} from "./messages";

export function* rootSaga() {
    yield all([
        watchMessages()
    ])
}