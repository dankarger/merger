import styled from "styled-components";
import {motion} from 'framer-motion'

export const ImageDivStyled = styled(motion.div) `
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: auto;
  //max-width: 90vw;
  max-height: 90vh;
  border: grey 1px solid;
  overflow: hidden;

  img {
    object-fit: cover;
    max-width: 100%;
    height: auto;
    border: 3px rgba(66, 65, 65, 0.35) solid;
    
    //padding:1rem;
  }

`