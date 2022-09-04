import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {SlideImageBorderStyled} from "../../styles/SlideImageBorder.styled";
import PedroSlider from "../interface/PedroSlider";

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
                {/*<Slider color="secondary" value={imageBorderWidth} aria-label="default" valueLabelDisplay="auto" onChange={handleChange}/>*/}
                <PedroSlider
                    value={imageBorderWidth} aria-label="default"
                    valueLabelDisplay="auto" onChange={handleChange}
                />
                <span>Border Radius</span>
                {/*<Slider value={imageBorderRadius} aria-label="default" valueLabelDisplay="auto"*/}
                {/*        onChange={handleChangeRadius}/>*/}
                <PedroSlider
                    value={imageBorderRadius} aria-label="default" valueLabelDisplay="auto"
                    onChange={handleChangeRadius}
                />
            </SlideImageBorderStyled>

        </Box>
    );
}
