import styled from 'styled-components';
import {ILoadMoreOrOldProps} from "../../typings";
import {CenterText, Line, LoadMoreButton} from "./LoadMoreOrOld.styles";

const LoadMoreOrOld = ({children, onClick}: ILoadMoreOrOldProps) => {
    return (
        <LoadMoreButton onClick={onClick}>
            <Line/>
            <CenterText>{children}</CenterText>
            <Line/>
        </LoadMoreButton>
    );
};

export default LoadMoreOrOld;
