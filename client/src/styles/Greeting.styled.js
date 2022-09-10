import styled from "styled-components";
import {motion} from 'framer-motion'

export const GreetingStyled = styled(motion.span) `
  font-size: calc(1rem + 1vw);
  letter-spacing: 3px;
  font-weight: 800;
  color: #333333;

  span {
    color: rgb(143, 198, 218);
    margin-right: 5px;
    text-shadow: 1px 1px #070707;
    width: fit-content;
    white-space: nowrap;

  }


`