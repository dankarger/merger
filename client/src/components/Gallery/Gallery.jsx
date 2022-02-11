import React, {useState, useEffect} from "react";
import {ContainerStyled} from  "../../styles/Container.styled"
import DownloadImages from "../DownLoadImages/DownloadImages";
import {GalleryStyled} from "../../styles/Gallery.styled";
import DetailCard from "../DetaileCard/DetaileCard";
import {GalleryContainerStyled} from "../../styles/GalleryContainer.styled";
import ModalCardDetail from "../ModalCardDetail/ModalCardDetail";
import {GalleryContainerVariants, GalleryStyleVariants} from "../../animations/animations";
import {AnimatePresence} from "framer-motion";
import CardGallery from "../Card/CardGallery";
import Loader from "../Loader/Loader";

import axios from "axios";

const Gallery = () => {
    const [imageIds, setImageId] = useState([]);
    const [imageIds2, setImageId2] = useState([]);
    const [isDetailCardOpen, setIsDetailCardOpen]=useState(false);
    const [selectedCard,setSelectedCard]=useState({});
    const[isLoading,setIsLoading]=useState(true)

     const handleSelectCard=(card,cardRef)=>{
         setIsDetailCardOpen(!isDetailCardOpen);
         setSelectedCard(card)
    }



    const downloadCard= async (card)=>{
        await axios({
            url: card.secure_url, //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url =  window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            const format = card.secure_url.substring(card.secure_url.length-3)
            link.href = url;
            link.setAttribute('download', `${card.title}.${format}`); //or any other extension
            document.body.appendChild(link);
            link.click();
        });
    }

    return (

        <AnimatePresence>
        <GalleryContainerStyled
        >
            {isLoading &&  <Loader size={120}/>  }
            {isLoading && <p> LOADING...</p> }
            <GalleryStyled
                variants={GalleryStyleVariants}
                initial='initial'
                animate='animate'
            >
             <h1>Gallery</h1> <span>Images: {imageIds.length}</span>


                <DownloadImages handleSelectCard={handleSelectCard}
                                downloadCard={downloadCard}
                                setIsLoading={setIsLoading}
                                isLoading={isLoading}
                                />

                {isDetailCardOpen &&
                 <ModalCardDetail isDetaileCardOpen={isDetailCardOpen}
                                 card={selectedCard}
                                 handleSelectCard={handleSelectCard}
                                 downloadCard={downloadCard}/>
                }
            </GalleryStyled>

        </GalleryContainerStyled>
        </AnimatePresence>
    )
}
export default Gallery