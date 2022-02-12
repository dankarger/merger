import React, {useState, useEffect, useRef, useContext} from "react";
import myApi from '../../api/Api';
import {Cloudinary} from "@cloudinary/url-gen";
import {GalleryContainerStyled} from "../../styles/GalleryContainer.styled";
import CardGallery from "../Card/CardGallery";
import {cardGalleryVariants} from "../../animations/animations";
import {motion} from 'framer-motion'
import {UserContext} from "../../App";
import {StrongStyled} from "../../styles/Strong.styled";


const DownloadImages = ({handleSelectCard,
                            downloadCard,
                            setIsLoading,
                            handleDeleteCard,
                            isRefresh
                        }) => {
    const [imageIds, setImageId] = useState([]);
    const [isLoading2, setIsLoading2] = useState(true);
    // const cardRef=useRef(null)
    const [currentUser,setCurrentUser]= useContext(UserContext)

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

            const {data} = await myApi.post('/images',{
                userId:currentUser.id
                });
            setImageId(data)
            setIsLoading(false)
            setIsLoading2(false)
            console.log('da', data)

        } catch (e) {
            console.error(e)
        }
    }

    useEffect( async () => {
        setIsLoading(true)
        const {data} = await loadImages();
        console.log('dada' ,data)
        // setImageId(data)
        setIsLoading(false)

    }, [isRefresh])


    return (
        <>
            <h1>Gallery for <StrongStyled>{currentUser.name}</StrongStyled></h1>  <span><StrongStyled><h3>Images: {imageIds.length}</h3></StrongStyled></span>



                <GalleryContainerStyled>
                    {imageIds && imageIds.map((card,index)=>{
                        return ( <motion.div
                                variants={cardGalleryVariants}
                                initial='initial'
                                animate='animate'
                                whileHover='hover'
                                key={card.id}
                            >
                                {/*<img src={card.secure_url }/>*/}
                            <CardGallery card={card}
                                         downloadCard={downloadCard}
                                         handleSelectCard={handleSelectCard}
                                         handleDeleteCard={handleDeleteCard }
                                         key={card.id+card.username}
                        />
                        </motion.div>
                        )
                    }).reverse()}
                    {/*{imageIds &&  <Cards2 images={imageIds}/>}*/}

                    </GalleryContainerStyled>
        </>
    )
}
export default DownloadImages