import styled from "styled-components";
import {motion} from 'framer-motion'

export const WorkPageStyled = styled(motion.div) `
  width:100%;
  height: 100%;
  //height:fit-content;
  text-decoration: none;
  //position: absolute;
  display: flex;
   margin-top:10px;
  //padding-top:2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;




  @media (max-width: 1000px) {
    //width:80%;
    //height:80%;
    justify-content: right;
    align-items: end;


`