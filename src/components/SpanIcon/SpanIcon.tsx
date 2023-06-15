import React from 'react';
import styled from "styled-components";
import {IconContainer} from "./SpanIcon.styles";
import {StyledSpanProps} from "../../typings";


const SpanIcon = ({src}: StyledSpanProps) => {
    return (
        <IconContainer src={src}/>
    );
};

export default SpanIcon;