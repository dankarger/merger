import React, {useState} from "react";
import UploadImages from "../components/UploadImage/UploadImage";
import AddText from "../components/AddText/AddText";
import myApi from '../api/Api'
import Button from "@mui/material/Button";

const WorkSpace =()=> {
    const[inputText,setInputText]=useState('');
    const[overlayColor,setOverlayColor]=useState('')


    const handleInputChange = (e)=>{
        setInputText(e.target.value)

    }
    const handleSubmit =()=> {


    }
    return(
        <div>
            <h1> Workspace</h1>
        <UploadImages overlay={inputText} overlayColor={overlayColor}/>
            <AddText callback={handleInputChange} value={inputText}/>
            {/*<Button variant="contained" color="success" onClick={()=>console.log(inputText)}>merge</Button>*/}

        </div>


)
}
export default WorkSpace