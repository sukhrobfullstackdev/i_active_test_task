import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
export const MainDiv = styled.div`
  background-color: beige;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
`;