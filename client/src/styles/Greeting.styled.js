import styled from "styled-components";
import {motion} from 'framer-motion'

export const GreetingStyled = styled(motion.div) `
  //width: 100%;
  font-size: calc(1rem + 2vmin);
  letter-spacing: 5px;
  font-weight: 800;
  display: flex;
  //justify-content: right;
  align-items: center;
  //margin-left: 80%;
  color: #333333;
  background: rgba(28, 28, 35, 0.35);
  padding: 10px 0;
  padding-right: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;  
  span {
    margin-left: 10px;
    color: #1e4db7;
    //text-shadow: 1px 1px 1px #333333;
  }


`