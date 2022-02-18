import styled from "styled-components";
import {motion} from 'framer-motion'

export const DetailCardStyled = styled(motion.div) `
  //min-width: 100%;
  //min-height: 100%;
  max-width: 100%;
  max-height: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left:50%;
  position: fixed;
  z-index: 30000;

`



