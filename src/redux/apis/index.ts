import axios,{AxiosError} from "axios";

export const getMessages = async (latestMessagesId: number, oldMessages: boolean) => {
    try {
        const formData: any = new FormData();
        formData.append('actionName', 'MessagesLoad');
        formData.append('messageId', latestMessagesId);
        formData.append('oldMessages', oldMessages);
        const response: any = await axios.post(
            'http://a0830433.xsph.ru/',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
};