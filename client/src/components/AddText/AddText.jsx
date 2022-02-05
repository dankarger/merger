import React, {useState} from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {AddTextStyled} from "../../styles/AddText.styled";
import {ColorPicker} from "material-ui-color";
import {ContainerStyled} from "../../styles/Container.styled";

const AddText = ({callback,value,color,handleChange})=> {
    // const [inputText,setInputText]=useState('');




    return (
        <AddTextStyled>
            <TextField id="outlined-basic"
                       label="Add Text"
                       variant="outlined"
                       onChange={callback}
                       value={value}

            />
            {/*<Button variant="contained" color="success" onClick={()=>console.log()}>Add</Button>*/}
            {/*<ContainerStyled>*/}
                <ColorPicker defaultValue="transparent" value={color} onChange={handleChange}/>

                <Button variant="contained" color="success" onClick={()=>{
                    // setText1({overlay})
                }}>Add</Button>
                {/*<div>*/}
                {/*    <ColorPalette palette={palette} onSelect={handleChange}/>*/}
                {/*</div>*/}
            {/*</ContainerStyled>*/}
        </AddTextStyled>
    )
}

export default AddText




