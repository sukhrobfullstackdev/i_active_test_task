import {getMessages
} from "../apis";
import {takeEvery, put, call} from 'redux-saga/effects';
import {GET_MESSAGES, GET_MORE_MESSAGES, GET_OLD_MESSAGES} from "../types";
import {getMessagesSlice, getMoreMessagesSlice, getOldMessagesSlice} from "../slices/messageSlice";
import {ISagaProps, MessagesAPIData} from "../../typings";

export function* getMessagesSaga(data: ISagaProps) {
    try {
        const result: MessagesAPIData = yield call(getMessages, data.latestMessageId,data.oldMessages);
        yield put(getMessagesSlice(result.Messages));
    } catch (e: any) {
        throw new Error(e);
    }
}
export function* getOldMessagesSaga(data: ISagaProps) {
    try {
        const result: MessagesAPIData = yield call(getMessages, data.latestMessageId,data.oldMessages);
        yield put(getOldMessagesSlice(result.Messages));
    } catch (e: any) {
        throw new Error(e);
    }
}
export function* getMoreMessagesSaga(data: ISagaProps) {
    try {
        const result: MessagesAPIData = yield call(getMessages, data.latestMessageId,data.oldMessages);
        console.log(result.Messages)
        yield put(getMoreMessagesSlice(result.Messages));
    } catch (e: any) {
        throw new Error(e);
    }
}

export function* watchMessages() {
    yield takeEvery(GET_MESSAGES, getMessagesSaga);
    yield takeEvery(GET_OLD_MESSAGES, getOldMessagesSaga);
    yield takeEvery(GET_MORE_MESSAGES, getMoreMessagesSaga);
}