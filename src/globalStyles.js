import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 992px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const Button = styled.button`
  border-radius: 4px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 5px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  font-size: ${({ fontBig }) => (fontBig ? "1.5rem" : "1rem")};
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
export default GlobalStyle;
