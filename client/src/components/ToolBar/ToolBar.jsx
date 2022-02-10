import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom'
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {ToolBarMenuStyled} from "../../styles/ToolBarMenu.styled";

export default function ToolBar({imageCallback,
                                    isMenuOpen,
                                    textCallback,
                                    isTextMenuOpen,
                                    setIsBackGroundMenuOpen,
                                    downLoadLink,
                                    isDownloadLinkReady,
                                     download
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
            sx={{width:'100%',display:'flex',justifyContent:'center',marginLeft:'1rem',gap:'2rem' }}
        >
            <div>
            <ToggleButton sx={{padding:'0 1rem '}} value="list" aria-label="list" onClick={()=>{
                imageCallback(menu=>!menu)
                textCallback(false)
                setIsBackGroundMenuOpen(false)
            }}>
              Image
            </ToggleButton>
                <ToggleButton value="module" aria-label="module"
                              onClick={()=>{
                                    textCallback(menu=>!menu)
                                    imageCallback(false)
                                    setIsBackGroundMenuOpen(false)

                              }}>
                 Text
                </ToggleButton>
            <ToggleButton value="quilt" aria-label="quilt"
                          onClick={()=>{
                setIsBackGroundMenuOpen(menu=>!menu)
                textCallback(false)
                imageCallback(false)

            }}>
                Color
            </ToggleButton>
            <ToggleButton value="fx" aria-label="fx"
                          onClick={()=>{
                              setIsBackGroundMenuOpen(false)
                              textCallback(false)
                              imageCallback(false)

                          }}
            >
                FX
            </ToggleButton>
            <ToggleButton value="export" aria-label="export"
                          onClick={()=>{
                              setIsBackGroundMenuOpen(false)
                              textCallback(false)
                              imageCallback(false)

                          }}
            >
              MERGE
            </ToggleButton>
            </div>


            <Button onClick={download} variant="contained" color={'success'} disabled={!isDownloadLinkReady} >Download Image</Button>


        </ToggleButtonGroup>

            // </ToolBarMenuStyled>
    );
}
