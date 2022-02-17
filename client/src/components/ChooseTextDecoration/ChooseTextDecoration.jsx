import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ChooseTextDecoration({setText1Decorations}) {
    const [formats, setFormats] = React.useState(() => []);

    const handleFormat = (event, newFormats) => {
        console.log('formats',event,newFormats)
        setFormats(newFormats);
        let textDecorations = {
            bold:newFormats.includes('bold')?'bold':'regular',
            italic:newFormats.includes('italic')?'italic':'none',
            underline:newFormats.includes('underlined')?'underline':'none',
        }
        console.log('tet',textDecorations)
        setText1Decorations(textDecorations)

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
            <ToggleButton value="underlined" aria-label="underlined">
                <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton value="color" aria-label="color" disabled>
                <FormatColorFillIcon />
                <ArrowDropDownIcon />


            </ToggleButton>
        </ToggleButtonGroup>
    );
}
