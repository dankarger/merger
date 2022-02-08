import styled from "styled-components";

export const MenuLeftStyled = styled.div `
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
  height: 100%;
  max-width: 200px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20000;
  border-right: 8px rgba(44, 41, 41, 0.43) solid;
  border-top: 6px #333333 solid;
  background: whitesmoke;
  gap: 1rem;

`