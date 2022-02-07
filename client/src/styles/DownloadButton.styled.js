import styled from "styled-components";
import {motion} from 'framer-motion'

export const DownloadButtonStyled = styled(motion.div) `
  display: flex;
  justify-content: center;
  align-items: center;
  border: #282c34 1px solid;
  background: #b2d3b2;
  padding: 10px 20px;
  border-radius: 20px;
  //border: 1px solid #242a3b;
  transition: 300ms ease-in-out;

  &:hover {
    background: #105704;
    color: #d0c7c7;
    text-shadow: 1px 1px 1px #333333;


  }

`