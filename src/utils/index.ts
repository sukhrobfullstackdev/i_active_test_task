export const setSavedMessages = (id: string) => {
    const savedMessages = localStorage.getItem("savedMessages");
    if (savedMessages) {
        let oldSavedMessages: Array<string> = JSON.parse(savedMessages);
        oldSavedMessages.push(id);
        localStorage.setItem("savedMessages", JSON.stringify(oldSavedMessages));
    } else {
        let savedMessagesArray: Array<string> = [];
        savedMessagesArray.push(id);
        localStorage.setItem("savedMessages", JSON.stringify(savedMessagesArray));
    }
    return localStorage.getItem("savedMessages");
}
export const getSavedMessages = ():string => {
    const savedMessages = localStorage.getItem("savedMessages");
    return savedMessages === undefined || savedMessages === null ? [] : JSON.parse(savedMessages)
}
export const getTime = (str: string): string => {
    const dateObj = new Date(str);
    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
}