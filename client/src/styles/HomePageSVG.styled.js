import styled from "styled-components";
import {motion} from 'framer-motion'

export const HomePageSVGStyled = styled(motion.div) `
   
 width:150%;
  height:150%;
  //min-width:1500px;
  margin:0 auto;
  //position: relative;
  //left: 50%;
  //top: 50%;
  //transform: translate(-50%,-50%);
  opacity:  1;
  color:#333333;
  z-index: -10;
  //font-size: calc(53pt + 28vh);


  @media only screen and (max-width: 900px) {
    max-width:800px;
    max-height:800px;
    
  }
`