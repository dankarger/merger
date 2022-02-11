import styled from "styled-components";
import {motion} from 'framer-motion'

export const ImageDivStyled = styled(motion.div) `
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: auto;
  border: red  1px solid;
  max-height: 90vh;
 
 

  img {
    object-fit: cover;
    max-width: 100%;
    height: auto;
    //border:  3px rgba(66, 65, 65, 0.35) solid;
    border-color: ${({color})=> color || '#333333'};
    border-width: ${({width})=> width +'px'|| '0px'};
    border-style: solid;
    border-radius: ${({radius})=> radius +'px'|| '0%'}; ;
    //padding:1rem;
  }
  //img:hover{
  //  cursor: pointer;
  //}

`