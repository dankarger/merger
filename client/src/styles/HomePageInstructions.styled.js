import styled from "styled-components";
import {motion} from 'framer-motion'

export const HomePageInstructionsStyled = styled(motion.div) `
  //width: 100%;
  //max-width: 100%;
  //padding: 10%;
  height: 100vh;
  background: rgba(23, 87, 66, 0.79);
  display: flex;
  justify-content: space-between;
  align-items: center;
  //flex-direction: column;
  .instructions {
    color: whitesmoke;
    display: flex;
    //flex-direction: column;
    align-items: center;
    justify-content: space-around;
    //gap: 3rem;
  }
  .details {
    width:45%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    flex-direction: column;
    padding-left: 1rem;
  }
  .video-div {
    padding:50px;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  video {
    object-fit: cover;
  }

  @media (max-width: 900px) {
    //flex-direction: column;
  }
`