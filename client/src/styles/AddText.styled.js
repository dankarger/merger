import styled from "styled-components";
import {motion} from 'framer-motion'


export const AddTextStyled = styled(motion.div) `
  width: 210px;
  overflow-y: scroll;
  height: calc(100% - 20px);
  padding: 20px 17px 13px 20px;
  display: flex;
  justify-content: flex-start;
  gap: 5rem;
  align-items: start;
  flex-direction: column;
  position: absolute;
  z-index: 150;
  left: 0;
  top: 70px;
  border: 1px solid grey;
  border-bottom-right-radius: 10px;
  background: rgb(236, 236, 236);


  #chooseText {
    padding: 0;
  }


  @media (max-width: 1000px) {
    //width:80%;
    //height:80%;
    justify-content: right;
    align-items: end;

`