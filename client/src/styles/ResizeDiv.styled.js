import styled from "@emotion/styled"
import {motion} from 'framer-motion'

export  const ResizeDivStyled = styled(motion.div)`
  min-width: fit-content;
  min-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: solid 1px #ddd;
  //background: #f0f0f0;
  position: absolute;
  // width: ${props => props.width};
  // height: ${props => props.height};
  cursor: grab;
`;