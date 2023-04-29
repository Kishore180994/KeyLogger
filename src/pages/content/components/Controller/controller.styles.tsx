import styled from "styled-components";

interface Props {
  strokeColor: string;
}
export const StyledController = styled.div<Props>`
  position: fixed;
  z-index: 2147483647;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: stroke 1s ease-in-out;
  .controller-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .controller {
      width: 300px;
    }

    .controller path {
      stroke: ${({ strokeColor }) => strokeColor};
      stroke-width: 1;
      transition: stroke 1s ease-in-out;
    }

    .stroked-text {
      color: black;
      -webkit-text-stroke: 1px ${({ strokeColor }) => strokeColor}; // Add this line
      text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
        1px 1px 0 white;
      font-weight: bold;
      transition: text-shadow 1s ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .name {
    padding: 5px;
    backdrop-filter: contrast(0.7);
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    letter-spacing: 5px;
    div {
      writing-mode: vertical-rl;
      color: black;
      -webkit-text-stroke: 1px ${({ strokeColor }) => strokeColor}; // Add this line
      text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
        1px 1px 0 white;
      font-weight: bold;
      transition: text-shadow 1s ease-in-out;
    }
  }
`;
