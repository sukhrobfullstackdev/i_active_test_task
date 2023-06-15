import React from 'react';
import {StyledButton} from "./Button.styles";
import {IButtonProps} from "../../typings";

const Button = ({children,onClick}: IButtonProps) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;