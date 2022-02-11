import styled from "styled-components";
import {motion} from 'framer-motion'

export const ImageDivStyled = styled(motion.div) `
    //width:100%;
  
  //display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  //height: fit-content;
  height: auto;
  border: red  1px solid;
  max-height: 90vh;
  //position: absolute;
  position: absolute;
  //z-index: 100001;
  background:${({src})=> src } ;
 

  img {
    object-fit: contain;
    //max-width: 100%;
    //height: auto;
    //border:  3px rgba(66, 65, 65, 0.35) solid;
    border-color: ${({color})=> color || '#333333'};
    border-width: ${({width})=> width +'px'|| '0px'};
    border-style: solid;
    border-radius: ${({radius})=> radius +'px'|| '0%'}; ;
    //position: relative;
    //z-index: 100;
    //position: relative;
    //padding:1rem;
   
  }
  //img:hover{
  //  cursor: pointer;
  //}

`