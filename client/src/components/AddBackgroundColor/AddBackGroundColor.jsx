import React from "react";
import {ColorPickerDivStyled} from "../../styles/ColorPickerDiv.styled";
import {ColorPicker} from "material-ui-color";
import {AddBackGroundColorStyled} from "../../styles/AddBackGroundColor.styled";
import ColorPickerHtml from "../ColorPickerHtml/ColorPickerHtml";
import {MenuLeftVariants} from "../../animations/animations";
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import CustomSwitch from "../Switch/Switch";
import SwitchOnOff from "../Switch/SwitchOnOff";

const AddBackGroundColor =({backGroundColor,setBackGroundColor,setIsBackgroundShadow })=> {


    const handleChange=(e)=>{
        setBackGroundColor(e.target.value)
    }


    return (
        <AddBackGroundColorStyled
            variants={MenuLeftVariants}
            initial='initial'
            animate='animate'
        >
            <p><u>Canvas Options</u></p>
            <ColorPickerDivStyled>
                {/*<ColorPicker  value={backGroundColor} onChange={setBackGroundColor}/>*/}
                <ColorPickerHtml color={backGroundColor}
                                 setColor={setBackGroundColor}
                                 label={' Color'}
                                 icon={<FormatColorFillIcon/>}
                />

            </ColorPickerDivStyled>
            <CustomSwitch label={'Add Shadow'} setIsChecked={setIsBackgroundShadow} defaultValue={false}/>
            {/*<SwitchOnOff label={'Shadow'}/>*/}
        </AddBackGroundColorStyled>
    )
}
export default AddBackGroundColor