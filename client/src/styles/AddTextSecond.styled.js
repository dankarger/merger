import styled from "styled-components";
import {motion} from 'framer-motion'


export const AddTextSecondStyled = styled(motion.div) `
  width: 230px;
  height: calc(100% - 150px);
  padding:10px;
  display: flex;
  justify-content: start;
  gap: 4rem;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 150;
  left: 0;
  top: 70px;
  border: 1px solid grey;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: rgb(236, 236, 236);

  #chooseText {
    padding: 0;
  }

`