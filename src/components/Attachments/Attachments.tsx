import {AttachmentsProps} from "../../typings";
import {StyledAttachments, StyledImage, StyledVideo} from "./Attachments.styles";

const Attachments = ({attachments}: AttachmentsProps) => {
    if (attachments.length > 0) {
        return (
            <>
                {attachments.map(attachment => (
                    <StyledAttachments key={(new Date()).toString()}>
                        {attachment?.type === "image" ? <StyledImage src={attachment.url} alt="image"/> : <StyledVideo controls src={attachment?.url}/>}
                    </StyledAttachments>
                ))}
            </>
        );
    }
    return null;
};

export default Attachments;