import styled from "styled-components";

export const WorkImageDivStyled = styled.div `
 
  width: 90vw;
  height: 90vh;
  background-image: ${({image})=>image};
  padding: 0 20px;
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top:50px;
  font-size: 5vmin;
  overflow: hidden;
  background-color:${({backGroundColor})=>backGroundColor||'#333333'} ;
  //img {
  //  width:100%;
  //  height: 100%;
  //  object-fit: contain;
  //  object-position: inherit;
  //  
  //}
  
`