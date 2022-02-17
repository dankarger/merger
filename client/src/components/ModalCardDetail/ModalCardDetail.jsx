import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import {useEffect} from "react";
import {GalleryItemStyled} from "../../styles/GalleryItem.styled";
import CardGallery from "../Card/CardGallery";
import CardDetail from "../Card/CardDetail";
import {DetailCardStyled} from "../../styles/DetailCard.styled";

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

export default function ModalCardDetail({card,
                                            handleSelectCard,
                                            isDetaileCardOpen
                                            ,downloadCard,
                                            handleConfirmDelete,
                                            setIsDialogueOpen,
                                            handleDeleteCard
                                            }) {
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
            {/*<button type="button" onClick={handleOpen}>*/}
            {/*    Open modal*/}
            {/*</button>*/}
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    <DetailCardStyled >
                         <h2 id="unstyled-modal-title">{card.title}</h2>
                        {/*<CardGallery card={card} handleConfirmDelete={handleConfirmDelete}*/}
                        {/*             setIsDialogueOpen={setIsDialogueOpen} />*/}


                        <CardDetail card={card} handleConfirmDelete={handleConfirmDelete}
                                    downloadCard={downloadCard}
                                    handleDeleteCard={handleDeleteCard}
                                    setIsDialogueOpen={setIsDialogueOpen}
                                    handleSelectCard={handleSelectCard} />
                        </DetailCardStyled>
                </Box>
            </StyledModal>
        </div>
    );
}
