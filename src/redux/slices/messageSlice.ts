import {createSlice} from "@reduxjs/toolkit";
import {IMessageSliceInitialState, InitialStatOfMessages, SingleMessage} from "../../typings";
import {getSavedMessages, setSavedMessages} from "../../utils";

const initialState: IMessageSliceInitialState = {
    messages: [],
    loadedAll: false,
    latestMessageId: 0,
    savedMessages: getSavedMessages()
};
const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        getMessagesSlice: (state, action) => {
            state.messages = [...state.messages, ...action.payload];
            state.latestMessageId = Number(state.messages[state.messages.length - 1].id);
            return state;
        },
        getOldMessagesSlice: (state, action) => {
            state.messages = JSON.stringify(action.payload).includes(JSON.stringify(state.messages)) ? state.messages : [...action.payload,...state.messages];
            state.latestMessageId = Number(state.messages[state.messages.length - 1].id);
            return state;
        },
        getMoreMessagesSlice: (state, action) => {
            if (action.payload === undefined) {
                state.loadedAll = true;
                state.messages = [...state.messages];
            } else {
                state.messages = [...state.messages, ...action.payload];
                state.latestMessageId = Number(state.messages[state.messages.length - 1].id);
            }
            return state;
        },
        setSavedMessageSlice: (state, action) => {
            state.savedMessages = setSavedMessages(action.payload)
            return state;
        },
    }
});
export const {getMessagesSlice,getOldMessagesSlice,getMoreMessagesSlice,setSavedMessageSlice} = messagesSlice.actions;
export default messagesSlice.reducer;