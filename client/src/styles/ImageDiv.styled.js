import styled from "styled-components";
import {motion} from 'framer-motion'

export const ImageDivStyled = styled(motion.div) `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 90vw;
  max-height: 90vh;
  border: grey 1px solid;
  overflow: hidden;

  img {
    object-fit: contain;
    max-width: 90%;
    max-height: 90%;
    border: calc(.2rem + 1vmin) rgba(66, 65, 65, 0.35) solid;
    //padding:1rem;
  }

`