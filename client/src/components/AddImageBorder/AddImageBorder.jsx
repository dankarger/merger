import React,{useState} from "react";
import ColorPickerHtml from "../ColorPickerHtml/ColorPickerHtml";
import {AddImageBorderStyled} from "../../styles/AddImageBorder.styled";
import SlideImageBorder from "./SlideImageBorder";
import {ColorPickerDivStyled} from "../../styles/ColorPickerDiv.styled";
import BorderColorIcon from '@mui/icons-material/BorderColor';

const AddImageBorder = ({ setImageBorderWidth,
                            imageBorderWidth,
                            setImageBorderRadius,
                            imageBorderRadius,
                            setImageBorderColor,
                            imageBorderColor  }) => {

const handleColorChange=(e)=>{
    setImageBorderColor(e.target.value)
}

    return (
        <AddImageBorderStyled>
            <ColorPickerDivStyled>
                <ColorPickerHtml color={imageBorderColor}
                                 setColor={setImageBorderColor}
                                label={'Border Color:'}
                                 icon={<BorderColorIcon/>}
                />
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