import styled from "styled-components";

export const MenuLeftStyled = styled.div `
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
  height: 100%;
  //max-width: 200px;
  width: 100px;
  position: absolute;
  left: 0;
  top: 80px;
  z-index: 20000;
  border-left: 8px rgba(44, 41, 41, 0.99) solid;
  border-top: 1px #333333 solid;
  background: rgba(236, 236, 236, 0.93);
  gap: 1rem;
  border-top-right-radius: 15px;
  box-shadow: rgba(44, 43, 43, 0.16) 0 1px 4px, rgb(51, 51, 51) 0 0  0px 3px;

`