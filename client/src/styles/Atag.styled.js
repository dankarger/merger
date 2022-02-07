import styled from "styled-components";
import {motion} from 'framer-motion'

export const AtagStyled = styled(motion.a) `

  color: inherit;
  transition: 200ms ease-in-out;
  &:hover {
    color: #d0c7c7;
    //text-shadow: 1px 1px 1px #333333;


  }
`