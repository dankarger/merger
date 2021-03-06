import React, {useState} from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {AddTextStyled} from "../../styles/AddText.styled";
import {ColorPicker} from "material-ui-color";
import {ColorPickerDivStyled} from "../../styles/ColorPickerDiv.styled";
import {MenuLeftVariants} from "../../animations/animations";
import AddPosition from "../AddPosition/AddPosition";
import AddFontSize from "../AddFontSize/AddFontSize";
import {AddTextHeadingStyled} from "../../styles/AddTextHeading.styled";
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import ChooseText2Decoration from "../ChooseTextDecoration/ChooseText2Decoration";
import ColorPickerHtml from "../ColorPickerHtml/ColorPickerHtml";
import {AddTextSecondStyled} from "../../styles/AddTextSecond.styled";

const AddTextSecond = ({callback,
                     value,
                     color,
                     handleChange,
                     setText2Decorations,
                     text2Decorations,
                     setFontSize,fontSize})=> {

    const handleColorChange=(e)=> {

        handleChange(e.target.value)
    }

    return (
        <AddTextSecondStyled
            variants={MenuLeftVariants}
            initial='initial'
            animate='animate'
        >
            <ChooseText2Decoration id={'chooseText'}
                                   setText2Decorations={setText2Decorations}
                                   text2Decorations={text2Decorations}
            />
            <TextField id="outlined-basic"
                       label="Add Text"
                       variant="outlined"
                       onChange={callback}
                       value={value}
            />
            <AddFontSize fontSize={fontSize} setFontSize={setFontSize}/>
            <AddTextHeadingStyled>Text Color:</AddTextHeadingStyled>
            <ColorPickerDivStyled>
                <ColorPickerHtml value={color} setColor={handleChange} label={'Text Color'} icon={ <FormatColorTextIcon/>}/>
            </ColorPickerDivStyled>
            <hr/>
        </AddTextSecondStyled>


    )
}

export default AddTextSecond




