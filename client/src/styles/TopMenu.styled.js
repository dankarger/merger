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
  color: #333333;
  background: rgba(28, 28, 35, 0.35);
  min-height: 100px;
  z-index:  100;
  position: absolute;
  //  top:80px;
  //right:0;
  bottom: 25%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  //
  //span {
  //  color: #a8773c;
  //  margin-right:20px;
  //  width:fit-content;
  //  white-space: nowrap;
  //  
  //}


`