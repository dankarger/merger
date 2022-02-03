import styled from "styled-components";

export const WorkImageDivStyled = styled.div `
  width: 100%;
  height: 100%;
  background: ${({image})=>image || ''} no-repeat center cover ;
  padding: 0 20px;
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`