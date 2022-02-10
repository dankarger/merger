import * as React  from 'react';
import {useEffect} from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {TextField} from "@mui/material";
import {ButtonsDivStyled} from "../../styles/ButtonsDiv.styled";
import {ModalMergeFormStyled} from "../../styles/ModalMergeForm.styled";
import SelectimageFormat from "../SelectImageFormat/SelectimageFormat";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalMergeForm({isMergeFormOpen,
                                           setIsMergeFormOpen,
                                           handleSendMergeForm,
                                           imageTitle,
                                           imageFormat,
                                           setImageFormat,
                                           setImageTitle}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(()=> {
        if(isMergeFormOpen){
            setOpen(true)
        }else {
            handleClose(true)
        }
        return ()=>{
            handleClose(true)
            setIsMergeFormOpen(false)
        }
    },[isMergeFormOpen,setIsMergeFormOpen])

    const handleClose2=()=>{
        handleClose();
        setIsMergeFormOpen(false);
        // setImageTitle('');
    }

    const HandleMergeButton =()=>{
        handleSendMergeForm()
        handleClose2()
    }
    const handleTitleChange=(e)=>{
        setImageTitle(e.target.value)
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose2}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <Fade in={open}>
                    <Box sx={style}>
                        <ModalMergeFormStyled>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                          MergeForm
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Enter a Title for the Image
                            <TextField
                                id="outlined-Title"
                                // label="Title"
                                value={imageTitle}
                                onChange={handleTitleChange}
                            />
                        </Typography>
                            <SelectimageFormat setImageFormat={setImageFormat} imageFormat={imageFormat}/>
                            <ButtonsDivStyled>
                                <Button variant="contained" type="submit" color="error" onClick={handleClose2}>Cancel</Button>
                                <Button variant="contained" type="submit" color="success" onClick={HandleMergeButton}>Merge</Button>
                            </ButtonsDivStyled>
                            </ModalMergeFormStyled>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
