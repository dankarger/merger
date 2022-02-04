import React, {useState, useEffect} from "react";
import {HomePageStyled} from "../../styles/HomePage.styled";
import {ContainerStyled} from  "../../styles/Container.styled"
import {Image} from 'cloudinary-react'
import myApi from '../../api/Api';
// import SimpleAccordion from "../components/Accordion/Accordion";
import ActionAreaCard from "../../components/Card/Card";
import {AdvancedImage} from '@cloudinary/react'
import {Cloudinary} from "@cloudinary/url-gen";
import StandardImageList from "../ImageList/ImageList";

const Gallery = () => {
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
            setImageId(data.resources)
            // return data.data
            console.log('da', data.resources)
        } catch (e) {
            console.error(e)
        }
    }

    const makeList = () => {
        if (imageIds) {

            setImageId2(
                imageIds.map((imageId, index) => (
                    // console.log('dd',imageId.public_id)
                    <Image
                        key={index}
                        cloudName="meme3"
                        publicId={imageId.public_id}
                        width="300"
                        crop='scale'
                    />
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
                <h1 className='title'>gallery</h1>

                {/*{imageIds && imageIds.map((imageId, index) => (*/}
                {/*    // <ActionAreaCard image={ <Image*/}
                {/*    //     key={index}*/}
                {/*    //     cloudName="meme3"*/}
                {/*    //     publicId={imageId}*/}
                {/*    //     width="300"*/}
                {/*    //     crop='scale'*/}
                {/*    // />}/>*/}
                {/**/}
                {/*// ))}*/}
            </ContainerStyled>

            <h1>list</h1>
            {/*<StandardImageList images={imageIds} />*/}
            <h2>hhfff</h2>
            <div>
                <AdvancedImage cldImg={myImage} />
            </div>
        </div>
    )
}
export default Gallery