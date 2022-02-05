import styled from "styled-components";

export const ImageDivStyled = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width:90vw;
  height:fit-content;
  
  img {
    object-fit: contain;
    max-width:100%;
    height: auto;
  }

`