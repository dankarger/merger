import styled from "styled-components";

export const LoginFormStyled = styled.div `
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 4%;
  padding: 2rem;
  gap: 2rem;
  backdrop-filter:blur(10px);
  background: rgba(251, 251, 253, 0.29);
  box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;

  @media (max-width: 950px) {
    max-width:80%;
    max-height:50%;
    border: none;


  }
`