import styled from "styled-components";

export const OverlayTextStyled = styled.div `
  //width: 100%;
  //height: 100%;
  color: ${({color})=>color || '#33333'};
  font-size: ${({fontSize})=>fontSize  || '1em'  };
  font-family: ${({fontFamily})=> fontFamily|| 'Roboto , sans-serif'};
  //transform: translateY(-200px);
  //transform: translate(-50%, -10%);

  position: absolute;
  // left:${({left})=>left || "50%"}
  //padding: 0 20px;
  //margin:0 auto;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //flex-direction: column;

`