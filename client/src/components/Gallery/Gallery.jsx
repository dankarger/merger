import React, {useState, useEffect} from "react";
import {ContainerStyled} from  "../../styles/Container.styled"
import DownloadImages from "../DownLoadImages/DownloadImages";
import {GalleryStyled} from "../../styles/Gallery.styled";
import DetailCard from "../DetaileCard/DetaileCard";
import {GalleryContainerStyled} from "../../styles/GalleryContainer.styled";
import MenuLeft from "../Menu/MenuLeft";
import {GalleryContainerVariants, GalleryStyleVariants} from "../../animations/animations";
import {AnimatePresence} from "framer-motion";

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
        <AnimatePresence>
        <GalleryContainerStyled
        variants={GalleryContainerVariants}
        initial='initial'
        animate='animate'
        >
            {/*<MenuLeft />*/}
            <GalleryStyled
                variants={GalleryStyleVariants}
                initial='initial'
                animate='animate'
            >
             <h1>Gallery</h1>
                <DownloadImages handleSelectCard={handleSelectCard} />
                {isDetailCardOpen &&
                <DetailCard card={selectedCard} handleSelectCard={handleSelectCard}/> }
            </GalleryStyled>

        </GalleryContainerStyled>
        </AnimatePresence>
    )
}
export default Gallery