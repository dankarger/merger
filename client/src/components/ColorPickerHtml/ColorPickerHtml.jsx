import React from "react";
import {ColorPickerDivStyled} from "../../styles/ColorPickerDiv.styled";

const ColorPickerHtml=({setImageBorderColor,imageBorderColor})=> {

    const ChooseColor=(e)=>{
        setImageBorderColor(e.target.value)
    }


    return (
        <ColorPickerDivStyled>
            <label htmlFor="favcolor">Border Color:</label>
            <input type="color" id="favcolor" name="favcolor" value={imageBorderColor} onChange={ChooseColor}/>
        </ColorPickerDivStyled>
    )
}
export default ColorPickerHtml