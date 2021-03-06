import styled from "styled-components";
import {motion} from 'framer-motion'


export const MenuLeftPlaceHolderStyled = styled(motion.div) `
  width: 222px;
  height: calc(100% - 150px);

  padding: 10px 15px 0 25px;
  //margin-left: 10px;
  display: flex;
  justify-content: center;
  gap: 1px;
  align-items: start;
  flex-direction: column;
  position: absolute;
  z-index: 0;
  left: 0;
  top: 170px;
  //border: 1px solid grey;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  //background: rgb(236, 236, 236);
  background-color: rgba(124,168,186,0.29);
  overflow: hidden;

    p{
      font-size: calc(8pt + .3vw);
      opacity:0.5;
      
    }

  @media (max-width: 950px) {
     width: 100%;
     height: 500px;
    display: none;
   
     
     
  
`