import styled from "styled-components";
import {motion} from 'framer-motion'

export const HomePageInstructionsStyled = styled(motion.div) `
  //width: 100%;
  //max-width: 100%;
  padding: 10%;
  height: 50vh;
  background: rgba(23, 87, 66, 0.79);
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-direction: column;
  .instructions {
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: 900px) {
    //flex-direction: column;
  }
`