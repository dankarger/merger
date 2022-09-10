import React, {useState} from "react";
import Button from "@mui/material/Button";
import TabHeading from "../TabHeading/TabHeading";
import {motion} from 'framer-motion'
import {UploadImageFormStyled} from "../../styles/UploadImageForm.styled";
import {DownloadButtonVariants} from "../../animations/animations";
import {AddFileInputStyled} from "../../styles/AddFileInput.styled";
import {AddFileLabelStyled} from "../../styles/AddFileLabel.styled";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {fadeIn} from "../../animations/animations";
import AddImageBorder from "../AddImageBorder/AddImageBorder";
import MergeIcon from "@mui/icons-material/Merge";

export default function UploadImages({
                                         setBackgroundImage,
                                         handleMergeButton,
                                         setUploadedFile,
                                         downloadLink,
                                         imageBorderWidth,
                                         setImageBorderWidth,
                                         setImageBorderRadius,
                                         imageBorderRadius,
                                         setImageBorderColor,
                                         imageBorderColor,
                                         backgroundImage,
                                         setErrorMessage,
                                         setIsErrorMessage
                                     }) {
    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState()
    const [fileName, setFileName] = useState('')

    const handleFileInputChane = (e) => {

        const file = e.target.files[0];
        console.log('filetype', file.type)
        if (file.type !== "image/jpeg" && file.type !== "image/svg+xml" && file.type !== "image/png") {

            setErrorMessage('wrong type of File : (supported formats : JPG,JPEG,PNG,GIF,SVG)')
            return setIsErrorMessage(true)

        }
        console.log(file)
        previewFile(file);
        if (file.name.length > 0) setFileName(file.name);

    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
            setBackgroundImage(reader.result)
            setUploadedFile(reader.result)
        }

    }
    const handleSubmitFile = async (e) => {
        e.preventDefault();
        if (!previewSource) return

    }
    return (
        <>
            <UploadImageFormStyled
                action="" onSubmit={handleSubmitFile}
                className='form'
            > <TabHeading heading={'Image Tab'}/>
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
                    />
                    <AddFileLabelStyled
                        htmlFor="files"
                        variants={DownloadButtonVariants}
                        whileTap="tap"
                        whileHover='hover'
                    ><PhotoCamera
                    /> {fileName.substring(0, 14) || 'Upload Image'} </AddFileLabelStyled>
                    <hr/>
                </motion.div>

                <AddImageBorder imageBorderWidth={imageBorderWidth}
                                setImageBorderWidth={setImageBorderWidth}
                                setImageBorderRadius={setImageBorderRadius}
                                imageBorderRadius={imageBorderRadius}
                                setImageBorderColor={setImageBorderColor}
                                imageBorderColor={imageBorderColor}
                />

                <Button style={{justifySelf: 'center'}} onClick={handleMergeButton}
                        variant={backgroundImage ? "contained" : "outlined"} color={'info'}> <MergeIcon/>Merge</Button>
                <hr/>
            </UploadImageFormStyled>
        </>
    )
}