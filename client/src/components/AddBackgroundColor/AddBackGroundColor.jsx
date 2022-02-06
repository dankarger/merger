import React from "react";
import {ColorPickerDivStyled} from "../../styles/ColorPickerDiv.styled";
import {ColorPicker} from "material-ui-color";
import {AddBackGroundColorStyled} from "../../styles/AddBackGroundColor.styled";
import {motion} from 'framer-motion'
import {MenuLeftVariants} from "../../animations/animations";

const AddBackGroundColor =({backGroundColor,setBackGroundColor })=> {


    return (
        <AddBackGroundColorStyled
            variants={MenuLeftVariants}
            initial='initial'
            animate='animate'
        >
            <p>Choose the BackGround color</p>
            <ColorPickerDivStyled>
                <ColorPicker defaultValue="transparent" value={backGroundColor} onChange={setBackGroundColor}/>
            </ColorPickerDivStyled>
        </AddBackGroundColorStyled>
    )
}
export default AddBackGroundColor