import styled from "styled-components";

export const WorkImageDivStyled = styled.div `
   
  width: 90vmin;
  height: 70vmin;
  //max-width: 1280px;
  //max-height: 720px;
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