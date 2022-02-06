import styled from "styled-components";
import {motion} from  'framer-motion'

export const CanvasStyled = styled(motion.canvas) `
  //width: 100%;
  //height: 100%;
  //color: ${({color})=> color || '#33333'};
  // font-size: ${({fontSize})=>fontSize  || '1em'  };
  font-size: calc(1rem + 10vw);
  
  font-family: ${({fontFamily})=> fontFamily|| 'Roboto , sans-serif'};
  text-shadow: ${({textShadow})=>textShadow || '1px 1px 1px black'};
  //transform: translateY(-200px);
  //transform: translate(-50%, -10%);

  position: absolute;
   // left:${({left})=>left || "50%"}
  top:0
  //padding: 0 20px;
  //margin:0 auto;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //flex-direction: column;
  
  }
  
`