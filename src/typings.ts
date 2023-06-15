import LoadMoreOrOld from "./components/LoadMoreOrOld/LoadMoreOrOld";

export interface MessagesAPIData {
    Messages: Array<SingleMessage>,
    dislikeImages: Array<any>,
    likeImages: Array<any>
}

export interface SingleMessage {
    attachments: Array<null> | Array<Attachment>
    author: string,
    channel: string,
    content: string,
    date: string,
    id: string,
    region: string,
    senderNumber: string
}

export interface Attachment {
    type: string,
    url: string
}

export interface InitialStatOfMessages {
    messages: Array<SingleMessage>
}

export interface AttachmentsProps {
    attachments: Array<Attachment> | Array<null>
}

export interface IButtonProps {
    children: string;
    onClick?: (data: any) => any
}

export interface ILoadMoreOrOldProps {
    children: string,
    onClick: () => void
}
export interface IMessageProps { message: SingleMessage , savedMessage: boolean,addToSaved: (id:any) => any}
export interface StyledSpanProps {
    src: string;
}
export interface IMessageSliceInitialState {
    messages: Array<SingleMessage>,
    loadedAll: boolean,
    latestMessageId: number | string,
    savedMessages: any
}
export interface ISagaProps {type: string,oldMessages: boolean,latestMessagesId: number}