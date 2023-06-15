import styled from "styled-components";

export const MessageCommonDiv = styled.div`
  width: 900px;
  height: auto;
  background: #FFFFFF;
  border-radius: 1px;
  padding: 10px 20px 10px 10px;
  margin: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;
export const MessageNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 20px ;
`;
export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
`;
export const NameComment = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 13px;
  color: #808080;
  padding-left: 10px;
`;
export const NameCommentName = styled.p`
  font-style: normal;
  font-size: 16px;
  line-height: 13px;
  margin-bottom: 5px;
`;
export const NameCommentText = styled.h1`
  font-style: italic;
  font-size: 12px;
  line-height: 9px;
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;
export const IconsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
export const MessageBody = styled.div`
  display: flex;
  align-items: self-start;
  gap: 10px;
`;
export const DateText = styled.p`
  position: absolute;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 9px;
  text-align: center;
  color: #808080;
  margin-top: 5px;
`;
export const MainText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.035em;
  color: #333333;
  padding-left: 50px;
  margin: 0;
`;
export const MorePText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
  color: #808080;
  margin-left: 5%;
  margin-top: 8px;
`;
export const AvatarDate = styled.p`
  width: 10vw;
`;
export const MainContent = styled.p`
  width: 90vw;
`;