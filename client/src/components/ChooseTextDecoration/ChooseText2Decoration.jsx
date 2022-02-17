import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useEffect} from "react";

export default function ChooseText2Decoration({setText2Decorations,text2Decorations}) {
    const [formats, setFormats] = React.useState(() => []);

    useEffect(()=>{
        setFormats([text2Decorations.bold,text2Decorations.underline,text2Decorations.italic])


    },[text2Decorations])


    const handleFormat = (event, newFormats) => {
        console.log('formats',event,newFormats)
        setFormats(newFormats);
        let textDecorations = {
            bold:newFormats.includes('bold')?'bold':'regular',
            italic:newFormats.includes('italic')?'italic':'none',
            underline:newFormats.includes('underline')?'underline':'none',
        }
        console.log('tet',textDecorations)
        setText2Decorations(textDecorations)

    };

    return (
        <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
        >
            <ToggleButton value="bold" aria-label="bold">
                <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
                <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underline" aria-label="underline">
                <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton value="color" aria-label="color" disabled>
                <FormatColorFillIcon />
                <ArrowDropDownIcon />


            </ToggleButton>
        </ToggleButtonGroup>
    );
}
