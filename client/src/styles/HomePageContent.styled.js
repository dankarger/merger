import styled from "styled-components";
import {motion} from 'framer-motion'

export const HomePageContentStyled = styled(motion.div) `
  width: 100%;
  max-width:100%;
  padding: 10%;
 
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-direction: column;
  
  @media (max-width: 900px) {
    //flex-direction: column;
  }
`