import styled from "styled-components";

export const StyledContainer = styled.div`
  position: fixed;
  z-index: 2147483647;
  bottom: 10px;
  right: 10px;
`;

export const StyledButton = styled.div`
  display: inline-block;
  font-size: 16px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  color: rgb(255, 255, 255);
  background-color: rgb(65, 65, 65);
  border: 1px solid rgb(51, 51, 51);
  border-radius: 2px;
  pointer-events: none;
  padding: 10px;
  box-shadow: inset 0 0 6px 4px black, 0px 7px 4px #6a6666;

  transition: top 1s, opacity 1s;

  &:hover {
    opacity: 0.5;
  }

  &:active {
    top: 0;
    opacity: 0;
  }
`;
