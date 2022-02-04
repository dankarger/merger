import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToolBar({imageCallback,isMenuOpen,textCallback,isTextMenuOpen}) {
    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    return (
        <ToggleButtonGroup
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="list" aria-label="list" onClick={()=>imageCallback(!isMenuOpen)}>
              Image
            </ToggleButton>
            <ToggleButton value="module" aria-label="module" onClick={()=>textCallback(!isTextMenuOpen)}>
             Text
            </ToggleButton>
            <ToggleButton value="quilt" aria-label="quilt">
                {/*<ViewQuiltIcon />*/}
                FX
            </ToggleButton>
        </ToggleButtonGroup>
    );
}