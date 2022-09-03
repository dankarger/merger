import styled from "styled-components";

export const MenuLeftStyled = styled.div `
  display: flex;
  justify-content: right;
  align-items: start;
  width: fit-content;
  height: fit-content;
  //position: absolute;
  //left: 0;
  //top: 80px;
  margin-bottom:10px;
  background:#d3d3d3;
  gap: 11rem;
  border-top-right-radius: 5px;
  button {
    height:40px;
  }
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
 
      &:active{
        background: white;
      }
    }
  }

`