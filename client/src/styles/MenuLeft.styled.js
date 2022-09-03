import styled from "styled-components";

export const MenuLeftStyled = styled.div `
  display: flex;
  justify-content: left;
  align-self: flex-end;
  //gap:20px;
  width: fit-content;
  height: fit-content;
  //position: absolute;
  //left: 0;
  //top: 80px;
  margin: 10px 25px;
  //background:#d3d3d3;
  //gap: 11rem;
  border-top-right-radius: 5px;
  & button:active {
    background:red
  }
  button {
    height: 40px;
    margin-right: 10px;
    background: #d3d3d3;
    border-radius: 40px;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;

    }

    &:active {
      background: #ffffff;
      //border: 4px #231c1c solid;
      box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
    }
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

      &:active {
        background: white;
      }
    }
  }

`