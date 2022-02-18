import styled from "styled-components";

export const WorkingDivBounderiesStyled = styled.div `
  margin-left: 100px;
  width: calc(100vw - 500px);
  max-width: 1500px;
  max-height: 1200px;
  height: 92%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 1%;
  background: rgb(236, 236, 236);

  border: #333333 3px solid;

  z-index: 10;

  @media (max-width: 1000px) {
    width:80%;
     height:80%;
    justify-content: center;
    margin-left:50px;




  }
  
  
`