import styled from "styled-components";
import {motion} from 'framer-motion'

export const TopMenuStyled = styled(motion.div) `
  width: 100%;
  font-size: calc(1rem + 2vmin);
  letter-spacing: 3px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f8f6f6;
  background: rgba(28, 28, 35, 0.98);
  min-height: 100px;
  z-index: 100;
  position: absolute;
  //transform: translateY(230px);
  //  top:80px;
  //right:0;
  bottom: 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  @media (max-width: 950px) {
    display: none;

  }

`