import React,{useState} from "react";
import CustomSwitch from "../Switch/Switch";
import ColorPickerHtml from "../ColorPickerHtml/ColorPickerHtml";
import {AddImageBorderStyled} from "../../styles/AddImageBorder.styled";
import SlideImageBorder from "./SlideImageBorder";
import {ColorPicker} from "material-ui-color";
import {ColorPickerDivStyled} from "../../styles/ColorPickerDiv.styled";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import BorderColorIcon from '@mui/icons-material/BorderColor';

const AddImageBorder = ({ setImageBorderWidth,

                            imageBorderWidth,
                            setImageBorderRadius,
                            imageBorderRadius,
                            setImageBorderColor,
                            imageBorderColor  }) => {

const handleColorChange=(e)=>{
    setImageBorderColor(e.css.backgroundColor)
    console.log('color',imageBorderColor)
}

    return (
        <AddImageBorderStyled>
            <CustomSwitch /> <span>Border</span>
            {/*<ColorPicker onChange={handleColorChange} value={imageBorderColor}/>*/}
            <ColorPickerDivStyled>
            {/*    < FormatColorTextIcon />*/}
                <ColorPickerHtml color={imageBorderColor}
                                 setColor={setImageBorderColor}
                                label={'Border Color:'}
                                 icon={<BorderColorIcon/>}
                />
                {/*<ColorPicker    onChange={handleColorChange}/>*/}
            </ColorPickerDivStyled>

        <SlideImageBorder  setImageBorderWidth={ setImageBorderWidth}
                           imageBorderWidth={imageBorderWidth}
                           setImageBorderRadius={setImageBorderRadius}
                             imageBorderRadius={imageBorderRadius}
        />
        </AddImageBorderStyled>
    )
}
export default AddImageBorder