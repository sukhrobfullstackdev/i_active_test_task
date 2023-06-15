import {
    Avatar,
    LeftSide,
    MessageCommonDiv,
    MessageNav,
    NameComment,
    NameCommentName,
    NameCommentText, RightSide, ButtonGroup, IconsGroup, MessageBody, DateText, MainText,
    MorePText
} from "./Message.styles";
import avatar from "../../assets/avatar.png";
import right from "../../assets/icons/right.svg";
import hide from "../../assets/icons/hide.svg";
import settings from "../../assets/icons/settings.svg";
import Button from "../Button/Button";
import SpanIcon from "../SpanIcon/SpanIcon";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {IMessageProps, SingleMessage} from "../../typings";
import Attachments from "../Attachments/Attachments";
import {getTime} from "../../utils";

const Message = ({message, savedMessage, addToSaved}: IMessageProps) => {
    return (
        <MessageCommonDiv>
            <MessageNav>
                <LeftSide>
                    <Avatar src={avatar}/>
                    <NameComment>
                        <NameCommentName>{message.author}</NameCommentName>
                        <NameCommentText>{message.channel}</NameCommentText>
                    </NameComment>
                </LeftSide>
                <RightSide>
                    <ButtonGroup>
                        <Button>Левый</Button>
                        <Button>Центр</Button>
                        <Button>Правый</Button>
                    </ButtonGroup>
                    <IconsGroup>
                        <SpanIcon src={right}/>
                        <SpanIcon src={hide}/>
                        <SpanIcon src={settings}/>
                        <div onClick={() => addToSaved(message.id)}>{savedMessage ?
                            <AiFillStar size={24} color={"#0088EE"}/> :
                            <AiOutlineStar size={24} color={"#CDCDCD"}/>}</div>
                    </IconsGroup>
                </RightSide>
            </MessageNav>
            <MessageBody>
                <DateText>{getTime(message.date)}</DateText>
                <MainText>{message.content}</MainText>
            </MessageBody>
            <MorePText>Далее</MorePText>
            <Attachments attachments={message.attachments}/>
        </MessageCommonDiv>
    );
};

export default Message;