import React, {useState, useEffect} from "react";
import {ContainerStyled} from  "../../styles/Container.styled"
import DownloadImages from "../DownLoadImages/DownloadImages";
import {GalleryStyled} from "../../styles/Gallery.styled";

const Gallery = () => {
    const [imageIds, setImageId] = useState([]);
    const [imageIds2, setImageId2] = useState([]);


    return (
        <GalleryStyled>
            <ContainerStyled>
             <h1>Gallery</h1>
                <DownloadImages />
            </ContainerStyled>
        </GalleryStyled>
    )
}
export default Gallery