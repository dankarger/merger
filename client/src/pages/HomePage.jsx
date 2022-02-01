import React, {useState, useEffect} from "react";
import {Image} from 'cloudinary-react'
import myApi from '../api/Api';


const HomePage =() => {
    const [imageIds, setImageId] = useState();

    const loadImages = async ()=> {
        try {
            const {data} = await myApi.get('/images');
            // const data =await res.json();
            setImageId(data)
            console.log('da',data)
        } catch (e){
            console.error(e)
        }
    }
    useEffect(()=>{
        loadImages();
    },[])


    return (
        <div>
            HomePage2
            <div>
                <h1 className='title'>Home3</h1>
                {imageIds && imageIds.map((imageId,index)=>(
                <Image
                    key={index}
                    cloudName="meme3"
                    publicId={imageId}
                    width="300"
                    crop='scale'
                />
            ))}
            </div>
        </div>
    )
}
export default HomePage