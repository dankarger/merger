import styled from "styled-components";

export const WorkImageDivStyled = styled.div `
   
  width: 90%;
  height: 90%;
  max-width: 1920px;
  max-height: 1080px;
  background-image: ${({image})=>image};
  //padding: 0 20px;
  // margin:20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  //top:50px;
  font-size: 5vmin;
  overflow: hidden;
  box-shadow: ${({shadow})=>shadow||'none' };
  background-color:${({color})=>color||'#333333'} ;
  
  backdrop-filter: blur(5px)  ;
 
//backdrop-filter: blur(93);
  
`