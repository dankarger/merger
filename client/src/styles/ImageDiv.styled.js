import styled from "styled-components";
import {motion} from 'framer-motion'

export const ImageDivStyled = styled(motion.div) `
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  max-width:90vw;
  max-height:90vh;
  border:grey 1px solid;
  
  img {
    object-fit: contain;
    max-width:100%;
    height: auto;
    border:10px #333333 solid;
    padding:1rem;
  }

`