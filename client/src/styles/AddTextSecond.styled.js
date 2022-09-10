import styled from "styled-components";
import {motion} from 'framer-motion'


export const AddTextSecondStyled = styled(motion.div) `
  width: 210px;
  height: calc(100% - 20px);
  padding: 20px 17px 13px 20px;
  display: flex;
  overflow-y: scroll;
  justify-content: start;
  gap: 4rem;
  align-items: center;
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

`