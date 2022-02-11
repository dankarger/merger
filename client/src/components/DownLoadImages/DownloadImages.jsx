import React, {useState, useEffect,useRef} from "react";
import myApi from '../../api/Api';
import {Cloudinary} from "@cloudinary/url-gen";
import {GalleryContainerStyled} from "../../styles/GalleryContainer.styled";
import Loader from "../Loader/Loader";
import Cards2 from "../Card/Card2";
import CardGallery from "../Card/CardGallery";
import {cardGalleryVariants} from "../../animations/animations";
import {motion} from 'framer-motion'

const DownloadImages = ({handleSelectCard,downloadCard,setIsLoading}) => {
    const [imageIds, setImageId] = useState([]);
    const [isLoading2, setIsLoading2] = useState(true);
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
            setIsLoading(true)
            setIsLoading2(true)

            const {data} = await myApi.get('/images');
            setImageId(data)
            setIsLoading(false)
            setIsLoading2(false)
            console.log('da', data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(async () => {
        setIsLoading(true)
        const data = await loadImages();
        await setImageId(data.data)
        setIsLoading(false)

    }, [])


    return (

                <GalleryContainerStyled>
                    {isLoading2 && <Loader />}
                    {isLoading2 && <div style={{height:"100%",width:"100%"}}>  <Loader /></div>}
                    {imageIds && imageIds.map((card,index)=>{
                        return ( <motion.div
                                variants={cardGalleryVariants}
                                initial='initial'
                                animate='animate'
                                whileHover='hover'
                            >
                            <CardGallery card={card} downloadCard={downloadCard}

                        />
                        </motion.div>
                        )
                    })}
                    {imageIds &&  <Cards2 images={imageIds}/>}

                    </GalleryContainerStyled>

    )
}
export default DownloadImages