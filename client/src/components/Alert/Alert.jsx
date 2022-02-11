import * as React from 'react';
import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import {isNull} from "lodash";

export default function AlertCostum({errorMessage,severity,isErrorMessage,setErrorMessage,setIsErrorMessage}) {
    const [open, setOpen] = React.useState(false);

    useEffect(()=> {

            if(isErrorMessage) {
                setOpen(true)
            }
            return () => {
                // setErrorMessage(null)
                setIsErrorMessage(false)
            }
        }
    ,[setErrorMessage,isErrorMessage,setIsErrorMessage])


    return (
        <Box sx={{ width: '30%' }}>
            <Collapse in={open}>
                <Alert
                    severity={severity}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    {errorMessage}
                </Alert>
            </Collapse>
            {/*<Button*/}
            {/*    disabled={open}*/}
            {/*    variant="outlined"*/}
            {/*    onClick={() => {*/}
            {/*        setOpen(true);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Re-open*/}
            {/*</Button>*/}
        </Box>
    );
}
