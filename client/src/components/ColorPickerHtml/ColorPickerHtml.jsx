import React from "react";

const ColorPickerHtml=({setImageBorderColor,imageBorderColor})=> {

    const ChooseColor=(e)=>{
        setImageBorderColor(e.target.value)
    }


    return (
        <div>
            <label htmlFor="favcolor">Border Color:</label>
            <input type="color" id="favcolor" name="favcolor" value={imageBorderColor} onChange={ChooseColor}/>
        </div>
    )
}
export default ColorPickerHtml