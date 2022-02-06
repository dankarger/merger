import styled from "styled-components";
import {motion} from 'framer-motion'


export const AddBackGroundColorStyled = styled(motion.div) `
  //padding: 40px 20px;
  //margin:0 auto;
  width:20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  z-index: 11000;
  left: 60px;
  top: 50px;
  border: 1px solid grey;
  border-radius: 10px;
  background: rgba(236, 236, 236, 0.93);

  &:hover {
    cursor: grab;
  }
  

`