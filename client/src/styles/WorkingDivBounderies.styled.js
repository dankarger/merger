import styled from "styled-components";

export const WorkingDivBounderiesStyled = styled.div `
  margin-left: 100px;
  width: calc(100vw - 500px);
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 1%;
  background: rgb(236, 236, 236);

  border: #333333 3px solid;

  z-index: 10;

  @media (max-width: 950px) {
    width:100%;
     height:100%;
    


  }
  
  
`