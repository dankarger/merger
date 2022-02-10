import React, { useState   } from "react";
import Button from "@mui/material/Button";
import {motion } from 'framer-motion'
import {DownloadButtonStyled} from "../../styles/DownloadButton.styled";
import {UploadImageFormStyled} from "../../styles/UploadImageForm.styled";
import {DownloadButtonVariants} from "../../animations/animations";
import {AtagStyled} from "../../styles/Atag.styled";
import {AddFileInputStyled} from "../../styles/AddFileInput.styled";
import {AddFileLabelStyled} from "../../styles/AddFileLabel.styled";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {fadeIn} from "../../animations/animations";
import AddImageBorder from "../AddImageBorder/AddImageBorder";
import CustomSwitch from "../Switch/Switch";
import {Link} from "react-router-dom";

export default function UploadImages({setBackgroundImage,
                                         handleMergeButton,
                                         setUploadedFile,
                                         downloadLink,
                                         imageBorderWidth,
                                         setImageBorderWidth,
                                         setImageBorderRadius,
                                         imageBorderRadius,
                                         setImageBorderColor,
                                         imageBorderColor
}) {
    const[fileInputState,setFileInputState]=useState('')
    const [previewSource,setPreviewSource]=useState()
    const[fileName,setFileName] = useState('')

    const handleFileInputChane = (e)=>{
        const file = e.target.files[0];
        previewFile(file);
        if(file.name.length>0) setFileName(file.name);
    }
    function download () {

        console.log('d',downloadLink)
        const a = document.createElement('a');
       const url = downloadLink.substring(8)
        console.log(url)
        a.href=downloadLink
        a.download = "test.jpg"
        a.target='_blank'
        a.type='image/jpg'
        a.click()
        console.log(a)


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
                    {/*//button2*/}
                        <AddFileLabelStyled
                            htmlFor="files"
                            variants={DownloadButtonVariants}
                            whileTap="tap"
                            whileHover='hover'
                        ><PhotoCamera
                        /> {fileName.substring(0,14) || 'Upload Image' } </AddFileLabelStyled>
                    <AddFileInputStyled
                        type="file" name='image'
                        id='files'

                        onChange={handleFileInputChane}
                        value={fileInputState}
                        className='form-input'
                        // style={{opacity:0}}
                    />
                    <AddFileLabelStyled
                        htmlFor="files"
                        variants={DownloadButtonVariants}
                        whileTap="tap"
                        whileHover='hover'
                    ><PhotoCamera
                    /> {fileName.substring(0,14) || 'Upload Image' } </AddFileLabelStyled>
                </motion.div>
                Image -border

                <AddImageBorder  imageBorderWidth={ imageBorderWidth}
                                 setImageBorderWidth={ setImageBorderWidth}
                                 setImageBorderRadius={setImageBorderRadius}
                                 imageBorderRadius={imageBorderRadius}
                                 setImageBorderColor={setImageBorderColor}
                                 imageBorderColor={imageBorderColor}
                />
                <Button onClick={handleMergeButton} color="inherit" variant="outlined" type="submit" size='large' >merge</Button>
                {/*<ArrowForwardIcon />*/}
               <DownloadButtonStyled
               variants = {DownloadButtonVariants}
               whileHover='hover'
               >
                   {downloadLink &&<Link to={{pathname:downloadLink}}  target='_blank' download type={'image/png'} >dd}

                   {/*<Tooltip sx={{zIndex:111000,background:'red'}} title="Upload an Image">*/}
                       <AtagStyled
                           // href={downloadLink}
                           //         variants = {DownloadButtonVariants}
                           //         whileHover='hover'
                          // target="_blank"
                          //   // download={downloadLink}
                           onClick={download}
                       >Download Image</AtagStyled>
                   </Link>}
               </DownloadButtonStyled>

        </UploadImageFormStyled>
        </>
    )
}