import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useEffect} from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snackbars1({isOpen,setIsOpen}) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    useEffect(()=>{
        if(isOpen) {setOpen(true)}
        else{
            setOpen(false)
        }
        return ()=>{
            setOpen(false)
        }
    },[isOpen,open])

    const handleClose = (event, reason) => {
        setIsOpen(false)
       setOpen(false)



    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            {/*<Button variant="outlined" onClick={handleClick}>*/}
            {/*    Open success snackbar*/}
            {/*</Button>*/}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Image Uploaded successfully!
                </Alert>
            </Snackbar>
            {/*<Alert severity="error">This is an error message!</Alert>*/}
            {/*<Alert severity="warning">This is a warning message!</Alert>*/}
            {/*<Alert severity="info">This is an information message!</Alert>*/}
            {/*<Alert severity="success">This is a success message!</Alert>*/}
        </Stack>
    );
}
