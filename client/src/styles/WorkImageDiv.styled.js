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
  box-shadow: ${({shadow})=>shadow? '':'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;'};
  background-color:${({color})=>color||'#333333'} ;
  //filter: blur();
  backdrop-filter: blur(10px)  ;
 
//backdrop-filter: blur(93);
  //img {
  //  width:100%;
  //  height: 100%;
  //  object-fit: contain;
  //  object-position: inherit;
  //  
  //}
  
`