import styled from "styled-components";
import {motion} from 'framer-motion'

export const ImageDivStyled = styled(motion.div) `
    //width:100%;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: auto;
  //border: red  1px solid;
  max-height: 90vh;
  position: absolute;
  background:${({src})=> src } ;
  img {
    object-fit: contain;
    border-color: ${({color})=> color || '#333333'};
    border-width: ${({width})=> width +'px'|| '0px'};
    border-style: solid;
    border-radius: ${({radius})=> radius +'px'|| '0%'}; ;
  }
  
`