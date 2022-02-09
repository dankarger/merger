import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({isDialogueOpen,modalInfo}) {
    const [open, setOpen] = React.useState(isDialogueOpen);
    const navigateTo = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        navigateTo(modalInfo.navigate);
    };
    useEffect(()=>{
        setOpen(isDialogueOpen)
        return ()=>{
            setOpen(false)
        }
    },[isDialogueOpen])

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} color='green'>
                    {modalInfo.title}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {modalInfo.message}
                    </Typography>
                    <Typography gutterBottom>
                        {modalInfo.message2}
                    </Typography>
                    <Typography gutterBottom>
                        {/*Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus*/}
                        {/*magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec*/}
                        {/*ullamcorper nulla non metus auctor fringilla.*/}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        OK
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
