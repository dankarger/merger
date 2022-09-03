import React, {useState, useEffect, useRef, useContext} from "react";
import myApi from '../../api/Api';
import {Cloudinary} from "@cloudinary/url-gen";
import {GalleryContainerStyled} from "../../styles/GalleryContainer.styled";
import CardGallery from "../Card/CardGallery";
import {cardGalleryVariants} from "../../animations/animations";
import {motion} from 'framer-motion'
import {UserContext} from "../../App";
import {StrongStyled} from "../../styles/Strong.styled";
import {DownloadImagesInfoStyled} from "../../styles/DownloadImagesInfo.styled";

const DownloadImages = ({
                            handleSelectCard,
                            downloadCard,
                            setIsLoading,
                            handleDeleteCard,
                            isRefresh
                        }) => {
    const [imageIds, setImageId] = useState([]);
    const [isLoading2, setIsLoading2] = useState(true);
    const [currentUser, setCurrentUser] = useContext(UserContext)

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'meme3'
        }
    });

    const myImage = cld.image('sample');

    const loadImages = async () => {
        try {
            setIsLoading(true)
            setIsLoading2(true)

            const {data} = await myApi.post('/images/get', {
                userId: currentUser.id
            });
            setImageId(data)
            setIsLoading(false)
            setIsLoading2(false)

        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        const {data} = loadImages();
        // setImageId(data)
        setIsLoading(false)

    }, [isRefresh])


    return (
        <>
            <DownloadImagesInfoStyled>
                User: <StrongStyled>{currentUser.name}</StrongStyled>
                <span>Images:<StrongStyled> {imageIds.length}</StrongStyled></span>
            </DownloadImagesInfoStyled>
            <GalleryContainerStyled>
                {imageIds && imageIds.map((card, index) => {
                    return (
                        <motion.div
                            variants={cardGalleryVariants}
                            initial='initial'
                            animate='animate'
                            whileHover='hover'
                            key={card._id}
                        >
                            {/*<img src={card.secure_url }/>*/}
                            <CardGallery card={card}
                                         downloadCard={downloadCard}
                                         handleSelectCard={handleSelectCard}
                                         handleDeleteCard={handleDeleteCard}

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