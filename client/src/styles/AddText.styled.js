import styled from "styled-components";
import {motion} from 'framer-motion'


export const AddTextStyled = styled(motion.div) `
  width: 230px;
  height: calc(100% - 150px);
  padding-left:10px;
  //padding: 70px 15px 0 25px;
  //margin:0 auto;
  display: flex;
  justify-content: start;
  gap: 4rem;
  align-items: start;
  flex-direction: column;
  position: absolute;
  z-index: 150;
  left: 0;
  top: 150px;
  border: 1px solid grey;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: rgb(236, 236, 236);

  #chooseText {
    padding: 0;
  }

`