import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GET_MESSAGES} from "../../redux/types";
import {SingleMessage} from "../../typings";
import toast from 'react-hot-toast';
export const useMessages = ({latestMessageId}: { latestMessageId: number }) => {
    const dispatch = useDispatch();
    const messages: Array<SingleMessage> = useSelector((state: any) => state.messages.messages);
    const loadedAll: Array<SingleMessage> = useSelector((state: any) => state.messages.loadedAll);
    useEffect(() => {
        try {

            dispatch({type: GET_MESSAGES, latestMessageId, oldMessages: false});
        } catch (e: any) {
            console.log(e.message)
        }
    }, []);
    useEffect(() => {
        let intervalId: any = null;

        const fetchMessages = async () => {
            try {
                dispatch({ type: GET_MESSAGES, latestMessageId, oldMessages: false });
            } catch (e:any) {
                console.log(e.message)
            }
        };

        if (loadedAll) {
            intervalId = setInterval(fetchMessages, 5000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [loadedAll]);

    return {messages};
};