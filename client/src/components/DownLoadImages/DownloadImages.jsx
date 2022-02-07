import React, {useState, useEffect} from "react";
import {Image} from 'cloudinary-react'
import myApi from '../../api/Api';
import ActionAreaCard from "../../components/Card/Card";
import {Cloudinary} from "@cloudinary/url-gen";
import {GalleryItemStyled} from "../../styles/GalleryItem.styled";
import {GalleryStyled} from "../../styles/Gallery.styled";
import {GalleryContainerStyled} from "../../styles/GalleryContainer.styled";
import Loader from "../Loader/Loader";

const DownloadImages = ({handleSelectCard}) => {
    const [imageIds, setImageId] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
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
            // const data =await res.json();
            setImageId(data)

            // return data.data
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
                        {imageIds && imageIds.map((imageId, index) => (
                           <ActionAreaCard
                               title ={imageId.title}
                               createdBy={imageId.nameOfUser}

                               image={ <GalleryItemStyled><Image
                                key={index}
                                cloudName="meme3"
                                publicId={imageId.url}
                                crop='scale'
                                title={imageId.title}

                                onClick={()=>handleSelectCard(imageId)}
                               /></GalleryItemStyled>}/>
                        ))}
                    </GalleryContainerStyled>

    )
}
export default DownloadImages