import styled from "styled-components";
import {motion} from  'framer-motion'

export const OverlayTextStyled = styled(motion.div) `

  color: ${({color})=> color || '#33333'};
  font-size: ${({fontSize})=>fontSize +'px' || '80px'  };
  font-family: ${({fontFamily})=> fontFamily|| 'Roboto , sans-serif'};
  text-shadow: ${({textShadow})=>textShadow || '1px 1px 1px black'};
  font-weight: ${({fontWeight})=> fontWeight || '300'};
  text-decoration :${({underline})=> underline || 'none'} ;
  font-style: ${({italic})=>italic || 'normal'};
   
  position: absolute;
  ${({position})=> position};
  
  &:hover {
    cursor: grab;
  }
  
`