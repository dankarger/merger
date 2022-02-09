import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';


export default function ToolBar({imageCallback,
                                    isMenuOpen,
                                    textCallback,
                                    isTextMenuOpen,
                                    setIsBackGroundMenuOpen
                                }) {
    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    return (
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
            {/*<Tooltip sx={{zIndex:11000}} title="Text Overlay">*/}

                <ToggleButton value="module" aria-label="module"
                              onClick={()=>{
                                    textCallback(!isTextMenuOpen)
                                    imageCallback(false)
                                    setIsBackGroundMenuOpen(false)

                              }}>
                 Text
                </ToggleButton>
            {/*</Tooltip>*/}
            <ToggleButton value="quilt" aria-label="quilt"
                          onClick={()=>{
                setIsBackGroundMenuOpen(state=>!state)
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
        </ToggleButtonGroup>
    );
}
