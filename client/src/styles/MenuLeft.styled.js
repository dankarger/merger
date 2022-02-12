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
  //z-index: 20000;
  border-left: 8px rgba(44, 41, 41, 0.73) solid;
  border-top: 1px #333333 solid;
  background: rgba(236, 236, 236, 0.93);
  gap: 11rem;
  border-top-right-radius: 15px;
  box-shadow: rgba(44, 43, 43, 0.16) 0 1px 4px, rgb(51, 51, 51) 0 0 0px 3px;


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
      max-width:50px;
    }

`