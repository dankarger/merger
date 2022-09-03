import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MergeIcon from '@mui/icons-material/Merge';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Loader from "../Loader/Loader";


const toggleButtonStyle = {
   letterSpacing: "1px",
    border: "none",
    hover:"background:red"

}
const downLoadImageButtonStyle = {
    letterSpacing: "1px",

}


export default function ToolBar({imageCallback,
                                    textCallback,
                                    setIsBackGroundMenuOpen,
                                    downLoadLink,
                                    isDownloadLinkReady,
                                     download,
                                    handleMergeButton,
                                    backgroundImage,
                                    overlayText,
                                    textCallbackSecond,
                                    isDownloadLoader,

                                }) {
    const [view, setView] = React.useState('list');
    const[isDownloadLink,setIsDownloadLink]=useState(false)
    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    useEffect(()=>{
        if(downLoadLink){
            setIsDownloadLink(true)
        }

    },[downLoadLink])


    return (
        <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleChange}
            color='info'
            sx={{width:'100%',display:'flex',justifyContent:'right',marginRight:'5%', background:"#d3d3d3", gap:"20px"}}
        >
            <ToggleButton sx={{padding:'0 1rem '}} value="list" aria-label="list" onClick={()=>{
                imageCallback(menu=>!menu)
                textCallback(false)
                textCallbackSecond(false)
                setIsBackGroundMenuOpen(false)

            }}
                          style={toggleButtonStyle}
            >
              Image
            </ToggleButton>
                <ToggleButton value="module" aria-label="module"
                              onClick={()=>{
                                    textCallback(menu=>!menu)
                                  textCallbackSecond(false)
                                  imageCallback(false)
                                    setIsBackGroundMenuOpen(false)

                              }}
                              style={toggleButtonStyle}

                >
              Text   <LooksOneIcon/>
                </ToggleButton>
            <ToggleButton value="module2" aria-label="module2"
                          onClick={()=>{
                              textCallbackSecond(menu=>!menu)
                              textCallback(false)
                              imageCallback(false)
                              setIsBackGroundMenuOpen(false)
                          }}
                          style={toggleButtonStyle}
            >
                Text <LooksTwoIcon />
            </ToggleButton>
            <ToggleButton value="quilt" aria-label="quilt"
                          onClick={()=>{
                setIsBackGroundMenuOpen(menu=>!menu)
                              textCallbackSecond(false)
                              textCallback(false)
                              imageCallback(false)

            }}
              style={toggleButtonStyle}
            >
                Canvas
            </ToggleButton>
            <ToggleButton value="fx" aria-label="fx"
                          onClick={()=>{
                              setIsBackGroundMenuOpen(false)
                              textCallbackSecond(false)
                              textCallback(false)
                              imageCallback(false)

                          }}
                          disabled={true}
                          style={toggleButtonStyle}
            >
                FX
            </ToggleButton>

            <Button style={toggleButtonStyle} onClick={handleMergeButton} variant={(backgroundImage||overlayText)?"contained":"outlined"} color={'info'}> <MergeIcon/>Merge</Button>
            <Button style={{justifySelf:'center'}} onClick={download} variant="contained" color={'success'} disabled={!isDownloadLinkReady}> <FileDownloadIcon /> Download Image</Button>
            {(isDownloadLoader ) &&
            <span style={{transform: 'translateX(-90px) translateY(10px)'}}><Loader size={20}/></span>
            }
        </ToggleButtonGroup>
    );
}
