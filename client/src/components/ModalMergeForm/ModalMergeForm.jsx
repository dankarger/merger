import * as React  from 'react';
import {useEffect} from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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

export default function ModalMergeForm({isMergeFormOpen,setIsMergeFormOpen,handleSendMergeForm}) {
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
    },[isMergeFormOpen])

    const handleClose2=()=>{
        handleClose()
        setIsMergeFormOpen(false)

    }
    const HandleMergeButton =()=>{
        console.log('gggggg')
        handleSendMergeForm()
        handleClose2()
    }

    return (
        <div>
            {/*hhh*/}
            {/*<Button onClick={handleOpen}>Open modal</Button>*/}
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
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                          MergeForm
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            This will be the form
                            <Button variant="contained" type="submit" color="success" onClick={HandleMergeButton}>merge3</Button>

                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
