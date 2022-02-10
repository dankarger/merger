import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom'
import {useEffect, useState} from "react";

export default function ToolBar({imageCallback,
                                    isMenuOpen,
                                    textCallback,
                                    isTextMenuOpen,
                                    setIsBackGroundMenuOpen,
                                    downLoadLink
                                }) {
    const [view, setView] = React.useState('list');
    const[isDownloadLink,setIsDownloadLink]=useState(null)
    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    useEffect(()=>{
        if(downLoadLink){
            setIsDownloadLink(downLoadLink)
        }
    },[downLoadLink])

    const generateDownloadButton = ()=>{
        if(isDownloadLink) {
            return <Link to={{pathname: downLoadLink}} target='_blank' download type={'image/png'}>Download Image</Link>
        }
    }
    return (
        <div>
        <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleChange}
            color='info'
            sx={{width:'100%',display:'flex',justifyContent:'left',marginLeft:'1rem' }}
        >
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
            {isDownloadLink && <Link to={{pathname: downLoadLink}} target='_blank' download type={'image/png'}>Download Image</Link>}

        </ToggleButtonGroup>
            {/*{generateDownloadButton}*/}
            </div>
    );
}
