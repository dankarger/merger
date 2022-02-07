import React, {useState, useEffect} from "react";
import {Image} from 'cloudinary-react'
import myApi from '../../api/Api';
import ActionAreaCard from "../../components/Card/Card";
import {Cloudinary} from "@cloudinary/url-gen";
import {GalleryItemStyled} from "../../styles/GalleryItem.styled";
import {GalleryStyled} from "../../styles/Gallery.styled";
import {GalleryContainerStyled} from "../../styles/GalleryContainer.styled";

const DownloadImages = ({handleSelectCard}) => {
    const [imageIds, setImageId] = useState([]);
    const [imageIds2, setImageId2] = useState([]);

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
    const makeList = () => {
        if (imageIds) {

            setImageId2(
                imageIds.map((imageId, index) => (
                    <div  key={index}>
                        <img src={imageId.url} alt="hh"/>
                    </div>

                )))
        }
        console.log('image,',imageIds)
    }


    useEffect(() => {
       const data =  loadImages();
        setImageId(data.data)
        makeList()
    }, [])


    return (

                <GalleryContainerStyled>
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