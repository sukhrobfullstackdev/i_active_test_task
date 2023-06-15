import axios, {AxiosError} from "axios";

export const getMessages = async (latestMessageId: number | string, oldMessages: boolean) => {
    try {
        const response: any = await axios.post(
            'http://a0830433.xsph.ru/',
            {
                actionName: 'MessagesLoad',
                messageId: latestMessageId,
                oldMessages
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        return response.data;
    } catch (error: any) {
        console.log("api ishlamayapti")
        throw new Error(error);
    }
};