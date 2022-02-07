import styled from "styled-components";
import {motion} from 'framer-motion'

export const GalleryStyled = styled(motion.div) `
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid #807474;
  border-radius: 3px;
  gap: 2rem;
  background: #4e5e5e;
`