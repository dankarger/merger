import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SelectimageFormat({imageFormat,setImageFormat}) {

    const handleChange=(e) =>{
        setImageFormat(e.target.value);
    }

    return (
        <FormControl >
            <FormLabel sx={{textAlign:'center'}} id="demo-radio-buttons-group-label">Format</FormLabel>
            <RadioGroup style={{border:'1px grey dotted',padding:'.5rem',width:'fit-content',borderRadius:'10px'}}
                aria-labelledby="demo-radio-buttons-group-label"
                value={imageFormat}
                name="radio-buttons-group"

            >
                <FormControlLabel  onChange={handleChange} value="JPG" control={<Radio />} label="JPG" />
                <FormControlLabel  onChange={handleChange} value="PNG" control={<Radio />} label="PNG" />
                <FormControlLabel  onChange={handleChange} value="GIF" control={<Radio />} label="GIF" />
                <FormControlLabel  onChange={handleChange} value="SVG" control={<Radio />} label="SVG" />
            </RadioGroup>
        </FormControl>
    );
}
