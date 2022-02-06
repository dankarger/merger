import React, {useState, useEffect} from "react";
import {ContainerStyled} from  "../../styles/Container.styled"
import DownloadImages from "../DownLoadImages/DownloadImages";
import {GalleryStyled} from "../../styles/Gallery.styled";
import DetailCard from "../DetaileCard/DetaileCard";

const Gallery = () => {
    const [imageIds, setImageId] = useState([]);
    const [imageIds2, setImageId2] = useState([]);
    const [isDetailCardOpen, setIsDetailCardOpen]=useState(false);
    const [selectedCard,setSelectedCard]=useState({});

     const handleSelectCard=(card)=>{
         setIsDetailCardOpen(!isDetailCardOpen);
         setSelectedCard(card)
     }

    return (
        <GalleryStyled>
            <ContainerStyled>
             <h1>Gallery</h1>
                <DownloadImages handleSelectCard={handleSelectCard} />
                {isDetailCardOpen &&
                <DetailCard card={selectedCard} handleSelectCard={handleSelectCard}/> }
            </ContainerStyled>

        </GalleryStyled>
    )
}
export default Gallery