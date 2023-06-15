import styled from "styled-components";
import {StyledSpanProps} from "../../typings";

export const IconContainer = styled.span<StyledSpanProps>`
  display: inline-flex;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});
`;