import styled from "styled-components";
import {motion} from 'framer-motion'

export const HomePageInstructionsStyled = styled(motion.div) `
  //width: 100%;
  //max-width: 100%;
  padding: 10%;
  height: 50vh;
  background: rgba(127, 255, 212, 0.88);
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-direction: column;

  @media (max-width: 900px) {
    //flex-direction: column;
  }
`