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
            state.latestMessageId = Number(action.payload[action.payload.length - 1].id);
            state.messages = action.payload;
            return state;
        },
        getOldMessagesSlice: (state, action) => {
            state.messages = JSON.stringify(action.payload).includes(JSON.stringify(state.messages)) ? state.messages : [...action.payload,...state.messages];
            state.latestMessageId = Number(state.messages[state.messages.length - 1].id);
            return state;
        },
        getMoreMessagesSlice: (state, action) => {
            if (JSON.stringify(action.payload).includes(JSON.stringify(state.messages))) state.loadedAll = true;
            state.messages = JSON.stringify(action.payload).includes(JSON.stringify(state.messages)) ? state.messages : [...state.messages,...action.payload];
            state.latestMessageId = Number(state.messages[state.messages.length - 1].id);
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