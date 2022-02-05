import React, {useState} from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {AddTextStyled} from "../../styles/AddText.styled";
import {ColorPicker} from "material-ui-color";
import {ContainerStyled} from "../../styles/Container.styled";
import {ColorPickerDivStyled} from "../../styles/ColorPickerDiv.styled";
import {motion} from 'framer-motion'
import {MenuLeftVariants} from "../../animations/animations";

const AddText = ({callback,value,color,handleChange})=> {
    // const [inputText,setInputText]=useState('');

    return (
        <AddTextStyled>
            <motion.div
                variant={MenuLeftVariants}
                initial='initial'
                animate='animate'
            >


            <TextField id="outlined-basic"
                       label="Add Text"
                       variant="outlined"
                       onChange={callback}
                       value={value}

            />
            {/*<Button variant="contained" color="success" onClick={()=>console.log()}>Add</Button>*/}
            {/*<ContainerStyled>*/}
            <Button variant="contained" color="success" onClick={()=>{
            }}>Add</Button>
            <ColorPickerDivStyled>
                <ColorPicker defaultValue="transparent" value={color} onChange={handleChange}/>
            </ColorPickerDivStyled>
            {/*</ContainerStyled>*/}
            </motion.div>
        </AddTextStyled>
    )
}

export default AddText




