import React, {useState, useEffect,useRef} from "react";
import {Image} from 'cloudinary-react'
import myApi from '../../api/Api';
import ActionAreaCard from "../../components/Card/Card";
import {Cloudinary} from "@cloudinary/url-gen";
import {GalleryItemStyled} from "../../styles/GalleryItem.styled";
import {GalleryStyled} from "../../styles/Gallery.styled";
import {GalleryContainerStyled} from "../../styles/GalleryContainer.styled";
import Loader from "../Loader/Loader";
import {CardGalleryStyled} from "../../styles/CardGallery.styled";
import Cards2 from "../Card/Card2";
import CardGallery from "../Card/CardGallery";

const DownloadImages = ({handleSelectCard,downloadCard}) => {
    const [imageIds, setImageId] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const cardRef=useRef(null)
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'meme3'
        }
    });

    // cld.image returns a CloudinaryImage with the configuration set.
    const myImage = cld.image('sample');

    const loadImages = async () => {
        try {
            const {data} = await myApi.get('/images');
            setImageId(data)
            console.log('da', data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        setIsLoading(true)
       const data =  loadImages();
        setImageId(data.data)
        setIsLoading(false)

    }, [])


    return (

                <GalleryContainerStyled>
                    {isLoading && <Loader />}
                        {/*{imageIds && imageIds.map((imageId, index) => (*/}
                        {/*    <CardGalleryStyled  key={imageId._id}>*/}
                        {/*   <ActionAreaCard*/}
                        {/*       ref={cardRef}*/}
                        {/*       title ={imageId.title}*/}
                        {/*       createdBy={imageId.nameOfUser}*/}

                        {/*       image={ <GalleryItemStyled><Image*/}
                        {/*           cloudName="meme3"*/}
                        {/*        publicId={imageId.url}*/}
                        {/*        crop='scale'*/}
                        {/*        title={imageId.title}*/}

                        {/*        onClick={()=>handleSelectCard(imageId,cardRef)}*/}
                        {/*       /></GalleryItemStyled>}/>*/}

                        {/*    </CardGalleryStyled>*/}

                        {/*))}*/}
                    {imageIds && imageIds.map((card,index)=>{
                        return  <CardGallery card={card} downloadCard={downloadCard}/>
                    })}
                    {imageIds &&  <Cards2 images={imageIds}/>}
                    </GalleryContainerStyled>

    )
}
export default DownloadImages