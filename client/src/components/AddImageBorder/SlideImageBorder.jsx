import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {SlideImageBorderStyled} from "../../styles/SlideImageBorder.styled";

export default function SlideImageBorder({
                                             imageBorderWidth,
                                             setImageBorderWidth,
                                             imageBorderRadius,
                                             setImageBorderRadius

                                         }) {


    const handleChange = (e) => {
        setImageBorderWidth(e.target.value)
    }
    const handleChangeRadius = (e) => {
        setImageBorderRadius(e.target.value)
    }
    return (
        <Box width={190}>
            <SlideImageBorderStyled>
                <hr/>
                <span>Border Width</span>
                <Slider value={imageBorderWidth} aria-label="default" valueLabelDisplay="auto" onChange={handleChange}/>
                <br/>
                <hr/>
                <span>Border Radius</span>
                <Slider value={imageBorderRadius} aria-label="default" valueLabelDisplay="auto"
                        onChange={handleChangeRadius}/>
                <hr/>
            </SlideImageBorderStyled>
        </Box>
    );
}
