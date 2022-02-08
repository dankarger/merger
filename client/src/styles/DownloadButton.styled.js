import styled from "styled-components";
import {motion} from 'framer-motion'

export const DownloadButtonStyled = styled(motion.div) `
  display: flex;
  justify-content: center;
  align-items: center;
  border: #282c34 1px solid;
  background: rgba(230, 236, 230, 0.11);
  padding: 10px 20px;
  border-radius: 4%;
  //border: 1px solid #242a3b;
  transition: 300ms ease-in-out;

  //&:hover {
  //  background: #f1f5f1;
  //  color: #d0c7c7;
  //  text-shadow: 1px 1px 1px #333333;
  //
  //
  //}

`