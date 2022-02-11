import React from "react";
import {ColorPickerDivStyled} from "../../styles/ColorPickerDiv.styled";

const ColorPickerHtml=({setColor,color,label,icon})=> {

    const ChooseColor=(e)=>{
        setColor(e.target.value)
    }


    return (
        <ColorPickerDivStyled>
            {icon}
            <label htmlFor="favcolor">{label}</label>

            <input   type="color" id="favcolor" name="favcolor" value={color} onChange={ChooseColor}/>


        </ColorPickerDivStyled>
    )
}
export default ColorPickerHtml