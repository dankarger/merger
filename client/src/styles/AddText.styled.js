import styled from "styled-components";
import {motion} from 'framer-motion'


export const AddTextStyled = styled(motion.div) `
  //width: 100%;
  //height: 100%;

  padding: 40px 20px;
  //margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 10000;
  left: 60px;
  top: 50px;
  border: 1px solid grey;
  border-radius: 10px;
  background: rgba(236, 236, 236, 0.86);

  &:hover {
    cursor: grab;
  }

`