import React from "react";
import {DetailCardStyled} from "../../styles/DetailCard.styled";
import CardDetail from "../Card/CardDetail";

const DetailCard =({card,handleSelectCard})=> {

    return(
        <DetailCardStyled>
          {/*<h1>Title: <span>{card.title}</span> </h1>*/}
          {/*  <img src={card.url} alt="img"/>*/}
          {/*  <h2>Created by : <span>{card.nameOfUser}</span></h2>*/}
            <CardDetail card={card} handleSelectCard={handleSelectCard} />
        </DetailCardStyled>
    )
}
export default DetailCard