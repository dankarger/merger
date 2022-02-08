import React, { useState   } from "react";
import Button from "@mui/material/Button";
import {motion } from 'framer-motion'
import {MenuLeftVariants} from "../../animations/animations";
import {DownloadButtonStyled} from "../../styles/DownloadButton.styled";
import {UploadImageFormStyled} from "../../styles/UploadImageForm.styled";
import {DownloadButtonVariants} from "../../animations/animations";
import {AtagStyled} from "../../styles/Atag.styled";
import {AddFileInputStyled} from "../../styles/AddFileInput.styled";
import {AddFileLabelStyled} from "../../styles/AddFileLabel.styled";
import Tooltip from '@mui/material/Tooltip';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {fadeIn} from "../../animations/animations";

export default function UploadImages({overlay,setBackgroundImage,onMouseMove,uploadImage,handleMergeButton,handleCloseMergeForm,setUploadedFile,downloadLink}) {
    const[fileInputState,setFileInputState]=useState('')
    const [previewSource,setPreviewSource]=useState()
    const[fileName,setFileName] = useState('')


    const handleFileInputChane = (e)=>{
        const file = e.target.files[0];
        previewFile(file);
        setFileName(file.name);



    }

    function download () {
        const a = document.createElement('a');
        a.href = downloadLink.current
        a.click()
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
                    variants={fadeIn}
                    initial='initial'
                    animate='animate'
                >
                <AddFileInputStyled
                    type="file" name='image'
                    id='files'
                       onChange={handleFileInputChane}
                       value={fileInputState}
                       className='form-input'
                    // style={{opacity:0}}
                      />
                        <AddFileLabelStyled htmlFor="files">{fileName.substring(0,14) || 'Upload image' }<PhotoCamera /> </AddFileLabelStyled>
                {/*<button className='btn' type='submit'>Submit</button>*/}
                {/*<Button variant="contained" type="submit" color="success" onClick={()=>console.log('fg')}>merge</Button>*/}

                </motion.div>
                <Button onClick={handleMergeButton} color="inherit" variant="outlined" type="submit" size='large' >merge</Button>
               <DownloadButtonStyled
               variants = {DownloadButtonVariants}
               whileHover='hover'
               >
                   {/*<Tooltip sx={{zIndex:111000,background:'red'}} title="Upload an Image">*/}

                       <AtagStyled href={downloadLink.current}
                                   // variants = {DownloadButtonVariants}
                                   // whileHover='hover'

                       >Download Image</AtagStyled>
                   {/*</Tooltip>*/}

               </DownloadButtonStyled
               >
            </UploadImageFormStyled>


        </>
    )
}