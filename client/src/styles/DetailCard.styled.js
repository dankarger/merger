import styled from "styled-components";
import {motion} from 'framer-motion'

export const DetailCardStyled = styled(motion.div) `
  min-width: 100%;
  min-height: 100%;
  max-width: 70%;
  max-height: 70%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-direction: column;
  //position: absolute;
  top: 50%;
  left:50%;
  //margin-top:-10%;
  position: fixed;
  //left: calc(50vw - 50%);
  //top: calc(50vh - 50%);;
  //transform: translate(-50%, -50%);
  z-index: 30000;
  //padding: 1rem 2rem;
  background: rgba(1, 17, 35, 0.75);
  border: 5px solid #333333;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;


`



