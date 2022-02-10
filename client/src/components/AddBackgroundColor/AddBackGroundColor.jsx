import React from "react";
import {ColorPickerDivStyled} from "../../styles/ColorPickerDiv.styled";
import {ColorPicker} from "material-ui-color";
import {AddBackGroundColorStyled} from "../../styles/AddBackGroundColor.styled";
import ColorPickerHtml from "../ColorPickerHtml/ColorPickerHtml";
import {MenuLeftVariants} from "../../animations/animations";
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';

const AddBackGroundColor =({backGroundColor,setBackGroundColor })=> {


    return (
        <AddBackGroundColorStyled
            variants={MenuLeftVariants}
            initial='initial'
            animate='animate'
        >
            <p>Choose the BackGround color</p>
            <ColorPickerDivStyled>
                {/*<ColorPicker  value={backGroundColor} onChange={setBackGroundColor}/>*/}
                <ColorPickerHtml color={backGroundColor}
                                 setColor={setBackGroundColor}
                                 label={'BackGround Color'}
                                 icon={<FormatColorFillIcon/>}
                />

            </ColorPickerDivStyled>

        </AddBackGroundColorStyled>
    )
}
export default AddBackGroundColor