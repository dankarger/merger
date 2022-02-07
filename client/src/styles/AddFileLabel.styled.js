import styled from "styled-components";
import {motion} from 'framer-motion'

export const AddFileLabelStyled = styled(motion.label) `
  transform: rotateX(20px);
  border: black 1px solid;
  border-radius: 20px;
  background: #5f8bd3;
  color: whitesmoke;
  text-shadow: 1px 1px black;
  padding:8px 15px;
  font-size: calc(8pt + 1vmin);
  
  &:hover {
    cursor: pointer;
  }
`