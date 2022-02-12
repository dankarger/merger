import styled from "styled-components";
import {motion} from 'framer-motion'

export const FooterStyled = styled(motion.footer) `
  margin-top: 10vh;
  //width: 100%;
  max-height: 60px;
  min-height: 50px;
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid #807474;
  background-color: rgb(60, 91, 94);
  color: whitesmoke;
  border-radius: 3px;
  gap: 3rem;
  position: static;
  bottom: 0;
  z-index: 1000;
  //background: #4e5e5e;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  div {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    border-radius: 20px;
    //backdrop-filter: blur(12px);
    //border: 1px dotted rgba(245, 245, 245, 0.18);
    padding: 10px 20px;
  }
`