import {combineReducers, configureStore} from "@reduxjs/toolkit";

import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./sagas";
import messages from "./slices/messageSlice";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    messages
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);