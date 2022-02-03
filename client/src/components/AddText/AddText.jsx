import React, {useState} from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

const AddText = ({callback,value})=> {
    // const [inputText,setInputText]=useState('');




    return (
        <div>
            <TextField id="outlined-basic"
                       label="Add Text"
                       variant="outlined"
                       onChange={callback}
                       value={value}

            />
            {/*<Button variant="contained" color="success" onClick={()=>console.log(inputText)}>merge</Button>*/}

        </div>
    )
}

export default AddText




