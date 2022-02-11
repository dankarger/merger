import styled from "styled-components";
import {motion} from 'framer-motion'

export const AddFileLabelStyled = styled(motion.label) `
  transform: rotateX(20px);
  border: black 1px solid;
  border-radius: 3px;
  background: rgba(95, 95, 98, 0.53);
  color: whitesmoke;
  text-shadow: 1px 1px black;
  padding: 8px 15px;
  font-size: calc(8pt + 1vmin);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
  }
`