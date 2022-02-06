import styled from "styled-components";
import {motion} from  'framer-motion'

export const OverlayTextDiveStyled = styled(motion.div) `
  width:${({width})=> width|| '100%'};
  height :${({height})=> height|| '100%'};
   
   
  background: ${({background})=> background};
  position: absolute;
  ${({position})=> position};
   
  }
  
`