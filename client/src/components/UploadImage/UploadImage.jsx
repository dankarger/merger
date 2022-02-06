import React, {useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import {motion } from 'framer-motion'
import {MenuLeftVariants} from "../../animations/animations";

import {UploadImageFormStyled} from "../../styles/UploadImageForm.styled";




export default function UploadImages({overlay,setBackgroundImage,onMouseMove,uploadImage,handleMergeButton,handleCloseMergeForm,setUploadedFile}) {
    const[fileInputState,setFileInputState]=useState('')
    const [previewSource,setPreviewSource]=useState()
    // const [position,setPosition] = useState({x:0,y:0})



    const handleFileInputChane = (e)=>{
        const file = e.target.files[0];
        previewFile(file);
        // console.log('dd',file)



    }

    const previewFile= (file) => {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = ()=> {
            setPreviewSource(reader.result)
            setBackgroundImage(reader.result)
            setUploadedFile(reader.result)

        }

    }
    const handleSubmitFile = async (e) => {
        e.preventDefault();
        if(!previewSource) return
        // const reader = new FileReader();
        // reader.readAsDataURL(selectedFile)
        // uploadImage(previewSource);
    }

    return (
        <>

            <UploadImageFormStyled
                                   action="" onSubmit={handleSubmitFile}
                                   className='form'
                                   // as={motion.div}

            >
                <motion.div
                    variants={MenuLeftVariants}
                    initial='initial'
                    animate='animate'
                >
                <input type="file" name='image'
                       onChange={handleFileInputChane}
                       value={fileInputState}
                       className='form-input'
                       draggable={true}/>
                {/*<button className='btn' type='submit'>Submit</button>*/}
                {/*<Button variant="contained" type="submit" color="success" onClick={()=>console.log('fg')}>merge</Button>*/}

                </motion.div>
                <Button onClick={handleMergeButton} variant="contained" type="submit" color="success">merge</Button>
                {/*<div onClick={handleMergeButton}>cllick</div>*/}
            </UploadImageFormStyled>

</>
    )
}