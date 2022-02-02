import React, {useState, useEffect} from "react";
import {HomePageStyled} from "../../styles/HomePage.styled";
import {Image} from 'cloudinary-react'
import myApi from '../../api/Api';
// import SimpleAccordion from "../components/Accordion/Accordion";
import ActionAreaCard from "../../components/Card/Card";

const DownloadImages = () => {
    const [imageIds, setImageId] = useState([]);
    const [imageIds2, setImageId2] = useState([]);

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
                    <Image
                        key={index}
                        cloudName="meme3"
                        publicId={imageId}
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
                <h1 className='title'>gallery</h1>
                {imageIds && imageIds.map((imageId, index) => (
                    <ActionAreaCard image={ <Image
                        key={index}
                        cloudName="meme3"
                        publicId={imageId}
                        width="300"
                        crop='scale'
                    />}/>
                ))}
                {imageIds && imageIds.map((image,index)=>{

                    return (

                       <div>

                        <Image
                        key={index}
                        cloudName="meme3"
                        publicId={image.publicId}
                        width="300"
                        crop='scale'
                    />
                    <img src={image.secure_url} alt="dd"/>
                       </div>
                )

                })}
            </div>
    )
}
export default DownloadImages