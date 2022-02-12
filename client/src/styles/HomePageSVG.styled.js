import styled from "styled-components";
import {motion} from 'framer-motion'

export const HomePageSVGStyled = styled(motion.div) `
 //  
 width:100%;
  height:100%;
  //min-width:1500px;
  //margin:0 auto;
  position: fixed;
  //transform: translate(-50%,-50%);
  //left: 50%;
  //top: 50%;
  opacity:  1;
  color:#333333;
  z-index: -10;
  


  @media (max-width: 950px) {
    //
    //left: 50%;
    //top: 50%;
    //max-width:80%;
    //max-height:800px;
    //transform: translateX(300px);
    
  }
`