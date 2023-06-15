import React, {MouseEventHandler, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GET_MESSAGES, GET_MORE_MESSAGES, GET_OLD_MESSAGES} from "../../redux/types";
import {useMessages} from "./useMessages";
import Message from "../Message/Message";
import LoadMoreOrOld from "../LoadMoreOrOld/LoadMoreOrOld";
import {getSavedMessages, setSavedMessages} from "../../utils";
import {setSavedMessageSlice} from "../../redux/slices/messageSlice";
import Button from "../Button/Button";
import {SingleMessage} from "../../typings";
import toast from "react-hot-toast";

const Messages = () => {
    const dispatch = useDispatch();
    const [sortedMessages, setSortedMessages] = useState<Array<SingleMessage>>([])
    const [isAsc, setIsAsc] = useState<boolean>(true);
    const latestMessageId: number = useSelector((state: any) => state.messages.latestMessageId);
    const savedMessagesArray: Array<string> = useSelector((state: any) => state.messages.savedMessages);
    const loadedAll: boolean = useSelector((state: any) => state.messages.loadedAll);
    const {messages} = useMessages({latestMessageId});

    const loadOldMessages = () => {
        dispatch({type: GET_OLD_MESSAGES, latestMessageId, oldMessages: true});
    }
    const loadMoreMessages = () => {
        dispatch({type: GET_MORE_MESSAGES, latestMessageId, oldMessages: false});
    }
    const handleClick = (id: any) => {
        dispatch(setSavedMessageSlice(id))
    }
    const sort = () => {
        setIsAsc(prevState => !prevState);

        const sortedMessages = [...messages].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            if (isAsc) {
                return dateA - dateB; // Sort in ascending order
            } else {
                return dateB - dateA; // Sort in descending order
            }
        });
        setSortedMessages(sortedMessages);

    };
    return (
        <>
            <LoadMoreOrOld onClick={loadOldMessages}>Load Old</LoadMoreOrOld>
            <Button onClick={sort}>Asc/Desc</Button>
            {!(sortedMessages.length > 0) && messages.map(message => <Message addToSaved={handleClick}
                                                                              savedMessage={savedMessagesArray.includes(message.id)}
                                                                              key={message.id} message={message}/>)}
            {sortedMessages.length > 0 && sortedMessages.map(message => <Message addToSaved={handleClick}
                                                                                 savedMessage={savedMessagesArray.includes(message.id)}
                                                                                 key={message.id} message={message}/>)}
            {loadedAll ?
                <p>All data has been already got! you will receive new messages now if there is any new data!</p> :
                <LoadMoreOrOld onClick={loadMoreMessages}>Load More</LoadMoreOrOld>}
        </>
    );
};

export default Messages;