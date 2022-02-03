import React, {useState, useEffect} from "react";
import {HomePageStyled} from "../styles/HomePage.styled";
import {Image} from 'cloudinary-react'
import myApi from '../api/Api';
// import SimpleAccordion from "../components/Accordion/Accordion";
import ListDividers from "../components/Divider/Divider";
import StandardImageList from "../components/ImageList/ImageList";
import ActionAreaCard from "../components/Card/Card";

const HomePage = () => {
    const [imageIds, setImageId] = useState([]);
    const [imageIds2, setImageId2] = useState();

    const loadImages = async () => {
        try {
            const {data} = await myApi.get('/images');
            // const data =await res.json();
            setImageId(data)
            console.log('da', data)
        } catch (e) {
            console.error(e)
        }
    }

    const makeList = () => {
        if (imageIds) {
            setImageId2(
                imageIds.map((imageId, index) => (
                    <Image
                        key={index}
                        cloudName="meme3"
                        publicId={imageId}
                        width="300"
                        crop='scale'
                    />
                )))
        }
    }
    useEffect(() => {
        loadImages();
        makeList()
    }, [])


    return (
        <HomePageStyled>
            HomePage2

            {/*<SimpleAccordion />*/}
            <ListDividers/>
            <StandardImageList images={imageIds}/>
            <div>
                <h1 className='title'>Home3</h1>
                {imageIds && imageIds.map((imageId, index) => (
                    <ActionAreaCard image={ <Image
                        key={index}
                        cloudName="meme3"
                        publicId={imageId}
                        width="300"
                        crop='scale'
                    />}/>
                ))}
            </div>
        </HomePageStyled>
    )
}
export default HomePage