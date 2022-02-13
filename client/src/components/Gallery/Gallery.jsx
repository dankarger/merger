import React, {useState, useEffect, useContext} from "react";
import myApi from "../../api/Api"
import {ContainerStyled} from "../../styles/Container.styled"
import DownloadImages from "../DownLoadImages/DownloadImages";
import {GalleryStyled} from "../../styles/Gallery.styled";
import {GalleryContainerStyled} from "../../styles/GalleryContainer.styled";
import ModalCardDetail from "../ModalCardDetail/ModalCardDetail";
import {GalleryStyleVariants} from "../../animations/animations";
import {AnimatePresence} from "framer-motion";
import Loader from "../Loader/Loader";
import axios from "axios";
import AlertCostum from "../Alert/Alert";
import {UserContext} from "../../App";
import DeleteDialog from "../Dialog/DeleteDialog";

const Gallery = () => {
    const [imageIds, setImageId] = useState([]);
    const [isDetailCardOpen, setIsDetailCardOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isErrorMessage, setIsErrorMessage] = useState(false);
    const[isDialogueOpen,setIsDialogueOpen] = useState(false);
    const[isRefresh,setIsRefresh]=useState(false)

    // const[modalInfo,setModalInfo]=useState({});

    const [currentUser,setCurrentUser]= useContext(UserContext);


    useEffect(()=>{

    },[isDialogueOpen,isRefresh])



    const handleConfirmDelete= async (card)=>{
        try {
            const response = await myApi.delete(`/images/${card._id}`, {
                headers: {
                    Authorization: 'authorizationToken'
                },
                data: {
                    userId:currentUser.id,
                    // password: 'password',
                }
            })
            setIsRefresh(!isRefresh)
        } catch (error) {
            console.log(error.message);
            setErrorMessage(error.message);
            setIsErrorMessage(true);
            console.log(error);
        }


    }

    const handleSelectCard = (card) => {
        setIsDetailCardOpen(!isDetailCardOpen);
        setSelectedCard(card)
    }

    const handleDeleteCard = (card) => {
        setSelectedCard(card)
        setIsDialogueOpen(true)




    }


    const downloadCard = async (card) => {
        try {
            await axios({
                url: card.secure_url,
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                const format = card.secure_url.substring(card.secure_url.length - 3)
                link.href = url;
                link.setAttribute('download', `${card.title}.${format}`); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
        } catch (error) {
            console.log(error.message);
            setErrorMessage(error.message);
            setIsErrorMessage(true);
            console.log(error);
        }
    }

    return (

        <div>
            <DeleteDialog isDialogueOpen={isDialogueOpen}
                          card={selectedCard}
                          handleConfirmDelete={handleConfirmDelete}/>
            <AlertCostum errorMessage={errorMessage}
                         severity={'error'}
                         setErrorMessage={setErrorMessage}
                         isErrorMessage={isErrorMessage}
                         setIsErrorMessage={setIsErrorMessage}/>
            <GalleryContainerStyled
            >
                {isLoading && <Loader size={120}/>}
                {isLoading && <p> LOADING...</p>}
                <GalleryStyled
                    variants={GalleryStyleVariants}
                    initial='initial'
                    animate='animate'
                >
                    {/*<h1>Gallery</h1>*/}


                    <DownloadImages handleSelectCard={handleSelectCard}
                                    downloadCard={downloadCard}
                                    setIsLoading={setIsLoading}
                                    isLoading={isLoading}
                                    handleDeleteCard={handleDeleteCard}
                                    isRefresh={isRefresh}
                    />

                    {isDetailCardOpen &&
                    <ModalCardDetail isDetaileCardOpen={isDetailCardOpen}
                                     card={selectedCard}
                                     handleSelectCard={handleSelectCard}
                                     downloadCard={downloadCard}
                                     handleDeleteCard={handleDeleteCard}
                    />
                    }
                </GalleryStyled>

            </GalleryContainerStyled>
        </div>
    )
}
export default Gallery