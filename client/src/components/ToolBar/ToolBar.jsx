import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {ToolBarMenuStyled} from "../../styles/ToolBarMenu.styled";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MergeIcon from '@mui/icons-material/Merge';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Loader from "../Loader/Loader";

import {AddTextSecondStyled} from "../../styles/AddTextDivider.styled";
import {isDisabled} from "@testing-library/user-event/dist/utils";

export default function ToolBar({imageCallback,
                                    isMenuOpen,
                                    textCallback,
                                    isTextMenuOpen,
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
        console.log('ggfg',isDownloadLinkReady)
        if(downLoadLink){
            setIsDownloadLink(true)
        }

    },[downLoadLink])


    return (
        // <ToolBarMenuStyled>
        <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleChange}
            color='info'
            sx={{width:'100%',display:'flex',justifyContent:'left',marginLeft:'5%'  }}
        >
            <ToggleButton sx={{padding:'0 1rem '}} value="list" aria-label="list" onClick={()=>{
                imageCallback(menu=>!menu)
                textCallback(false)
                textCallbackSecond(false)
                setIsBackGroundMenuOpen(false)
            }}>
              Image
            </ToggleButton>
                <ToggleButton value="module" aria-label="module"
                              onClick={()=>{
                                    textCallback(menu=>!menu)
                                  textCallbackSecond(false)
                                  imageCallback(false)
                                    setIsBackGroundMenuOpen(false)

                              }}>
              Text   <LooksOneIcon/>
                </ToggleButton>
            <ToggleButton value="module2" aria-label="module2"
                          onClick={()=>{
                              textCallbackSecond(menu=>!menu)
                              textCallback(false)
                              imageCallback(false)
                              setIsBackGroundMenuOpen(false)

                          }}>
                Text <LooksTwoIcon />
            </ToggleButton>
            <ToggleButton value="quilt" aria-label="quilt"
                          onClick={()=>{
                setIsBackGroundMenuOpen(menu=>!menu)
                              textCallbackSecond(false)
                              textCallback(false)
                              imageCallback(false)

            }}>
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
            >
                FX
            </ToggleButton>

            <Button style={{justifySelf:'center'}} onClick={handleMergeButton} variant={(backgroundImage||overlayText)?"contained":"outlined"} color={'info'}> <MergeIcon/>Merge</Button>
            <Button style={{justifySelf:'center'}} onClick={download} variant="contained" color={'success'} disabled={!isDownloadLinkReady}> <FileDownloadIcon /> Download Image</Button>
            {(isDownloadLoader ) &&
            <span style={{transform: 'translateX(-90px) translateY(10px)'}}><Loader size={20}/></span>
            }
        </ToggleButtonGroup>
            // </ToolBarMenuStyled>
    );
}
