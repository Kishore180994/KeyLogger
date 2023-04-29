import styled from "styled-components";

export const StyledTrackPad = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background-color: rgb(0 0 0 / 62%);
  border: 1px solid #ccc;

  .cursor-circle {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: blue;
    transform: translate(-50%, -50%);
  }
`;
