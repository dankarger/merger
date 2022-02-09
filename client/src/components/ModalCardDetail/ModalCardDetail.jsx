import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import {useEffect} from "react";
import ActionAreaCard from "../Card/Card";
import {GalleryItemStyled} from "../../styles/GalleryItem.styled";
import {Image} from 'cloudinary-react'
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
};

export default function ModalCardDetail({card,handleSelectCard,isDetaileCardOpen}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(()=>{
        if(isDetaileCardOpen){
            handleOpen()
        }

    },[isDetaileCardOpen])


    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Open modal
            </button>
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    <h2 id="unstyled-modal-title">{card.title}</h2>
                    {/*<img src={card.secure_url} alt=""/>*/}
                    {/*<p id="unstyled-modal-description">By: {card.createdBy}</p>*/}


                    <ActionAreaCard
                        // ref={cardRef}
                        title ={card.title}
                        createdBy={card.nameOfUser}

                        image={ <GalleryItemStyled><Image
                            cloudName="meme3"
                            publicId={card.url}
                            crop='scale'
                            title={card.title}

                            onClick={()=>handleSelectCard(card)}
                        /></GalleryItemStyled>
}  />

                </Box>
            </StyledModal>
        </div>
    );
}
