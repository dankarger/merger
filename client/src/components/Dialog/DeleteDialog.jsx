import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {useEffect} from "react";
import Loader from "../Loader/Loader";

export default function DeleteDialog({card,
                                         isDialogueOpen,
                                         handleConfirmDelete,
                                         setIsDialogueOpen}) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    useEffect(()=>{
        setOpen(isDialogueOpen)
    return ()=>{
            setOpen(false)
    }
    },[isDialogueOpen])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setIsDialogueOpen(false)
    };

    const handleDelete=()=>{
        handleConfirmDelete(card);

        setOpen(false)
    }

    return (
        <div>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Delete Image"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                      Delete this image?
                        You cannot undo this

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button  autoFocus onClick={handleClose}>
                       No
                    </Button>
                    <Button color={'error'} onClick={handleDelete} autoFocus>
                       Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
