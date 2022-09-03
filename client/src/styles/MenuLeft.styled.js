import styled from "styled-components";

export const MenuLeftStyled = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  height: fit-content;
  position: absolute;
  left: 0;
  top: 80px;
  background: rgba(236, 236, 236, 0.93);
  gap: 11rem;
  border-top-right-radius: 5px;

  //color: #9d9d9d;
  @media (max-width: 950px) {
    //border: red 2px solid;
    max-width: 100%;
    max-height: 500px;
    //transform: scale(0.3);
    //overflow: scroll;
    overscroll-behavior: contain;
    //transform: scale(0.3);
    overflow: hidden;
    button {
      font-size: 8px;
      max-width: 50px;
    }

`