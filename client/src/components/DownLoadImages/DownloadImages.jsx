import React, {useState, useEffect} from "react";
import {HomePageStyled} from "../../styles/HomePage.styled";
import {ContainerStyled} from  "../../styles/Container.styled"
import {Image} from 'cloudinary-react'
import myApi from '../../api/Api';
// import SimpleAccordion from "../components/Accordion/Accordion";
import ActionAreaCard from "../../components/Card/Card";
import {AdvancedImage} from '@cloudinary/react'
import {Cloudinary} from "@cloudinary/url-gen";
import {GalleryItemStyled} from "../../styles/GalleryItem.styled";

const DownloadImages = () => {
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
            <div>
                <ContainerStyled>
                        {imageIds && imageIds.map((imageId, index) => (
                           <ActionAreaCard
                               title ={imageId.title}
                               createdBy={imageId.nameOfUser}

                               image={ <Image
                                key={index}
                                cloudName="meme3"
                                publicId={imageId.url}
                                crop='scale'
                                title={imageId.title}
                            />}/>
                            // <p>{imageId.url}</p>
                            // <img key={index} src={imageId.url} alt="hh"/>

                        ))}
                    </ContainerStyled>


                <div>
                    <AdvancedImage cldImg={myImage} />
                </div>
            </div>
    )
}
export default DownloadImages