import styled from "styled-components";
import {motion} from  'framer-motion'

export const OverlayTextDiveStyled = styled(motion.div) `
   width:${({width})=> width+'px'|| '100%'};

  //width:fit-content;
  height :${({height})=> height+'px'|| '100%'};
   
   
  background: ${({background})=> background};
  position: fixed;
   border: red solid 11px;
 
   
  }
  
`