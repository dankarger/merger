import styled from "styled-components";
import {motion} from 'framer-motion'

export const DetailCardStyled = styled(motion.div) `
  width:80%;
  height: 80%;
  //max-width: 80vw;
  //max-height: 80vh;
  //transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-direction: column;
  //position: absolute;
  //top: 50vh;
  //margin-top:-10%;
  position: fixed;
  left: calc(50vw - 50%);
  top:calc(50vh - 50%);;
  //transform: translate(-50%, -50%);
  z-index: 30000;
  //padding: 1rem 2rem;
  background: rgba(1, 17, 35, 0.68);
  border:5px solid #333333;


`



