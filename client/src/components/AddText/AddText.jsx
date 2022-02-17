import React, {useState} from "react";
import {TextField} from "@mui/material";
import {AddTextStyled} from "../../styles/AddText.styled";
import {ColorPickerDivStyled} from "../../styles/ColorPickerDiv.styled";
import {MenuLeftVariants} from "../../animations/animations";
import AddFontSize from "../AddFontSize/AddFontSize";
import {AddTextHeadingStyled} from "../../styles/AddTextHeading.styled";
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
// import ChooseTextDecoration from "../../styles/ChooseTextDecoration/ChooseTextDecoration";
import ChooseTextDecoration from "../ChooseTextDecoration/ChooseTextDecoration";
import ColorPickerHtml from "../ColorPickerHtml/ColorPickerHtml";

const AddText = ({callback,
                     value,
                     color,
                     handleChange,
                     setText1Decorations,
                     setFontSize,fontSize})=> {
const handleColorChange=(e)=> {
    handleChange(e.target.value)
}

    return (
        <AddTextStyled
            variants={MenuLeftVariants}
            initial='initial'
            animate='animate'
        >
<ChooseTextDecoration id={'chooseText'} setText1Decorations={setText1Decorations}/>
            <TextField id="outlined-basic"
                       label="Add Text"
                       variant="outlined"
                       onChange={callback}
                       value={value}
            />
                <AddFontSize fontSize={fontSize} setFontSize={setFontSize}/>
            <AddTextHeadingStyled>Text Color:</AddTextHeadingStyled>
            <ColorPickerDivStyled>
                <ColorPickerHtml color={color} setColor={handleChange} label={'Text Color'} icon={ <FormatColorTextIcon/>}/>
            </ColorPickerDivStyled>
            <hr/>
        </AddTextStyled>
    )
}

export default AddText




