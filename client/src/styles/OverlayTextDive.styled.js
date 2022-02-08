import styled from "styled-components";
import {motion} from  'framer-motion'

export const OverlayTextDiveStyled = styled(motion.div) `
   width:${({width})=> width+'px'|| '10px'};

  //width:fit-content;
  height :${({height})=> height+'px'|| '10px'};
   
   
  // background: ${({background})=> background || 'transparent'};
   background: rgba(red, green, blue, alpha);
   position: absolute;
   border: red solid 11px;
 
   
  }
  
`