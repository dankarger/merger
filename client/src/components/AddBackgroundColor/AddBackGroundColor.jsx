 import React from "react";
import TabHeading from "../TabHeading/TabHeading";
import {ColorPickerDivStyled} from "../../styles/ColorPickerDiv.styled";
import {AddBackGroundColorStyled} from "../../styles/AddBackGroundColor.styled";
import ColorPickerHtml from "../ColorPickerHtml/ColorPickerHtml";
import {MenuLeftVariants} from "../../animations/animations";
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import CustomSwitch from "../Switch/Switch";

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
            <TabHeading heading={'Canvas Options'} />
            {/*<p><u></u></p>*/}
            <ColorPickerDivStyled>
                <ColorPickerHtml color={backGroundColor}
                                 setColor={setBackGroundColor}
                                 label={' Color'}
                                 icon={<FormatColorFillIcon/>}
                />

            </ColorPickerDivStyled>
            <CustomSwitch label={'Add Shadow'} setIsChecked={setIsBackgroundShadow} defaultValue={false}/>
        </AddBackGroundColorStyled>
    )
}
export default AddBackGroundColor