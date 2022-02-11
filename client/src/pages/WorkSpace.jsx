import React, {createRef, useContext, useEffect, useRef, useState} from "react";
import UploadImages from "../components/UploadImage/UploadImage";
import AddText from "../components/AddText/AddText";
import {AddTextSecondStyled} from "../styles/AddTextSecond.styled";
import MenuLeft from "../components/Menu/MenuLeft";
import Snackbars1 from "../components/SnackBar/SnackBar1";
import {ImageDivStyled} from "../styles/ImageDiv.styled";
import myApi from "../api/Api";
import {motion} from "framer-motion";
import {OverlayTextStyled} from "../styles/OverlayText.styled";
import {WorkImageDivStyled} from "../styles/WorkImageDiv.styled";
import {createColor} from "material-ui-color";
import {WorkPageStyled} from "../styles/WorkPage.styled";
import {UploadImageDivStyled} from "../styles/UplaodImageDiv.styled";
import {OverlayTextDiveStyled} from "../styles/OverlayTextDive.styled";
import {Skeleton} from "@mui/material";
import SkeletonDiv from "../components/SkeletonDiv/SkeletonDiv";
import CanvasElement from "../components/CanvasElement/CanvasElement";
import Canvas from "../components/CanvasElement/Canvas";
import {convertPositionToCss} from "../utils/utils";
import ModalMergeForm from "../components/ModalMergeForm/ModalMergeForm";
import AddBackGroundColor from "../components/AddBackgroundColor/AddBackGroundColor";
import {UserContext} from "../App";
import html2canvas from 'html2canvas';
import ResizeDiv2 from "../components/Resize-tryDiv/ResizeDiv2";
import MenuLeftPlaceHolder from "../components/Menu/MenuLeftPlaceHolder";
import {WorkingDivBounderiesStyled} from "../styles/WorkingDivBounderies.styled";
import {fadeIn} from "../animations/animations";
import axios from 'axios'
import AddTextSecond from "../components/AddTextSecond/AddTextSecond";
import Alert from "../components/Alert/Alert";
import AlertCostum from "../components/Alert/Alert";

const WorkSpace =()=> {
    //image const
    const[isImgMenuOpen,setIsImgMenuOpen]=useState(false);
    const[backgroundImage,setBackgroundImage]=useState();
    const[imageTitle,setImageTitle]=useState('Title');
    const[imageBorderWidth,setImageBorderWidth]=useState(5);
    const[imageBorderRadius,setImageBorderRadius]=useState(0);
    const[imageBorderColor,setImageBorderColor]=useState('#000000');

    //Text 1
    const[inputText,setInputText]=useState(String);
    const[isTextMenuOpen,setIsTextMenuOpen]=useState(false);
    const[overlayText,setOverlayText] = useState({inputText})
    const [color, setColor] = useState("#000000");
    const TextOverlayRef = useRef();
    const [fontSize,setFontSize]=useState('80');

    //Text2
    const[inputTextSecond,setInputTextSecond]=useState(String);
    const[isTextMenuSecondOpen,setIsTextMenuSecondOpen]=useState(false)
    const[overlayTextSecond,setOverlayTextSecond] = useState({inputTextSecond})
    const [colorSecond, setColorSecond] = useState("#000000");
    const TextOverlaySecondRef = useRef();
    const [fontSizeSecond,setFontSizeSecond]=useState('80');

    //Background
    const[backgroundColor,setBackGroundColor]=useState('#333333');
    const[isBackgroundMenuOpen,setIsBackGroundMenuOpen]=useState()

    //utils
    const[isSnackbar,setIsSnackBar]=useState(false);
    const [isMergeFormOpen,setIsMergeFormOpen]= useState(false);
    const[uploadedFile,setUploadedFile] = useState();
    const[downLoadLink,setDownloadLink]=useState()
    const[isDownloadLinkReady,setIsDownloadLinkReady]=useState(false);
    const[imageFormat,setImageFormat]=useState('JPG')
    const downloadLinkRef = useRef(null)
    const [isDownloadLoader,setIsDownloader ]= useState(false);
    const[errorMessage,setErrorMessage] = useState(null)
    const[isErrorMessage,setIsErrorMessage]=useState(false)

    //Reff
    const constraintsRef = useRef(null);
    const constraintsRefAddText = useRef(null);
    const dragConstraints = useRef(null);
    const exportRef = useRef(null)

    //User
    const [currentUser,setCurrentUser]= useContext(UserContext)

    const handleSendMergeForm = async ()=>{
        if(uploadedFile) {
          await  uploadImage()
        }
    }

     const download2= async ()=>{
        await axios({
            url: downLoadLink, //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            const format = downloadLinkRef.current.substring(downloadLinkRef.current.length-3)
            link.href = url;
            link.setAttribute('download', `${imageTitle}.${format}`); //or any other extension
            document.body.appendChild(link);
            link.click();
        });
    }

    useEffect(()=>{
        setOverlayText(inputText)
    },[inputText])
    const handleBackgroundChange =(value)=> {
        setBackGroundColor(value)
    }

    const uploadImage= async () => {
         try {
             const combinedLayers =  await captureHtmlToJpg();
             setIsDownloadLinkReady(false);
             setIsDownloader(true);
             const link = await myApi.post('/images', {
                data: combinedLayers ,
                 // overlay:{overlayObject},
                 user:currentUser,
                 title:imageTitle,
                 format:imageFormat,
                 headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'}
            });
            setIsSnackBar(snack=>!snack);
            downloadLinkRef.current = link.data.secure_url
            setDownloadLink(downloadLinkRef.current)
            setIsDownloadLinkReady(true);
             setIsDownloader(false);
        }catch (error) {
             setErrorMessage(error.message)
             setIsErrorMessage(true)
            throw new Error(error)


        }
    }
    const handleInputChange = (e)=>{
        setInputText(e.target.value);
    }

    const handleInputChangeSecond = (e)=>{
        setInputTextSecond(e.target.value);
    }

    const handleMergeButton =()=>{
        if(uploadedFile || inputText || inputTextSecond) {
            setIsMergeFormOpen(true);
            setIsErrorMessage(false)
        }else{
            setErrorMessage("Cannot Merge an Empty Work Space")
            setIsErrorMessage(true)
        }
    }
    const handleCloseMergeForm =()=>{
        setIsMergeFormOpen(false);
    }

    const captureHtmlToJpg =async ()=> {
         const response = await  html2canvas(exportRef.current).then(function (canvas) {
          return (canvas.toDataURL("image/jpeg", 0.9))
    })
          return  response

    }

    return(
      <WorkPageStyled ref={constraintsRefAddText}>
            <MenuLeft imageCallback={setIsImgMenuOpen}
                      isMenuOpen={isImgMenuOpen}
                      textCallback={setIsTextMenuOpen}
                      textCallbackSecond={setIsTextMenuSecondOpen}
                      isTextMenuOpen={isTextMenuOpen}
                      isBackgroundMenuOpen={isBackgroundMenuOpen}
                      setIsBackGroundMenuOpen={setIsBackGroundMenuOpen}
                      isDownloadLinkReady={isDownloadLinkReady}
                      variants={fadeIn}
                      initial='initial'
                      animate='animate'
                      download={download2}
                      handleMergeButton={handleMergeButton}
                      backgroundImage={backgroundImage}
                      overlayText={overlayText}
                      isDownloadLoader={isDownloadLoader}

            />
            {isImgMenuOpen &&
            <UploadImages
                         setBackgroundImage={setBackgroundImage}
                         handleMergeButton={handleMergeButton}
                         setUploadedFile={setUploadedFile}
                         downloadLink={downLoadLink}
                         setImageBorderWidth={setImageBorderWidth}
                         imageBorderWidth={imageBorderWidth}
                         imageBorderRadius={imageBorderRadius}
                         setImageBorderRadius={setImageBorderRadius}
                         imageBorderColor={imageBorderColor}
                         setImageBorderColor={setImageBorderColor}
                         backgroundImage={backgroundImage}
           />
            }
            {isTextMenuOpen &&
            <AddText callback={handleInputChange}
                     value={inputText}
                     handleChange={setColor}
                     color={color}
                     drag
                     dragElastic={111}
                     // dragConstraints={constraintsRefAddText}
                     fontSize={fontSize}
                     setFontSize={setFontSize}
            />
            }
          {isTextMenuSecondOpen &&
          <AddTextSecond callback={handleInputChangeSecond}
                   value={inputTextSecond}
                   handleChange={setColorSecond}
                   color={colorSecond}
                   drag
                   dragElastic={111}
              // dragConstraints={constraintsRefAddText}
                   fontSize={fontSizeSecond}
                   setFontSize={setFontSizeSecond}

          />
          }
            <MenuLeftPlaceHolder />
            {isBackgroundMenuOpen && <AddBackGroundColor backGroundColor={backgroundColor} setBackGroundColor={handleBackgroundChange}/>}
          <AlertCostum errorMessage={errorMessage}
                       severity={'error'}
                       setErrorMessage={setErrorMessage}
                        isErrorMessage={isErrorMessage}
                         setIsErrorMessage={setIsErrorMessage}/>
            <WorkingDivBounderiesStyled
                ref={dragConstraints}
            >

                 <ResizeDiv2
                Imagewidth={uploadedFile ? exportRef.current.naturalWidth: '100px'}
                Imageheight={uploadedFile? exportRef.current.naturalHeight : '100px'}
                drag
                >

            <WorkImageDivStyled as={motion.div}
                                // backgroundColor={backgroundColor}
                drag
                              color={backgroundColor}
                                ref={exportRef}
                                >

                {!backgroundImage && <SkeletonDiv />}
                {/*{backgroundImage &&*/}

                <ImageDivStyled
                    drag
                    dragConstraints={dragConstraints}
                    color={imageBorderColor}
                    width={imageBorderWidth}
                    radius={imageBorderRadius}
                >
                    {backgroundImage &&
                    <ResizeDiv2
                    Imagewidth={uploadedFile ? constraintsRef.current.naturalWidth: '100px'}
                    Imageheight={uploadedFile? constraintsRef.current.naturalHeight : '100px'}
                >

                    <motion.img drag dragConstraints={dragConstraints} ref={constraintsRef}   src={backgroundImage} alt="chosen22" style={{height: '100%'}}/>
                </ResizeDiv2>
                        }
                    <OverlayTextDiveStyled
                        drag
                    width={uploadedFile ? constraintsRef.current.naturalWidth: '100px'}
                    height={uploadedFile? constraintsRef.current.naturalHeight : '100px'}
                    >
                        <OverlayTextStyled
                            // dragConstraints={{ left:'50%',top:50,right:550,bottom:650 }}
                                           drag
                                           dragElastic={111}
                                           transition={{type:'spring',stiffness:300}}
                                           textshadow={'1px 1px 1px black'}
                                           color={color}
                                           fontSize={fontSize}
                                           dragConstraints={dragConstraints}
                                             ref={TextOverlayRef}
                        > {inputText}</OverlayTextStyled>
                    </OverlayTextDiveStyled >

                    {/*<OverlayTextDiveStyled*/}
                    {/*    drag*/}
                    {/*    // width={uploadedFile ? constraintsRef.current.naturalWidth: '100px'}*/}
                    {/*    // height={uploadedFile? constraintsRef.current.naturalHeight : '100px'}*/}
                    {/*>*/}
                        <OverlayTextStyled
                            // dragConstraints={{ left:'50%',top:50,right:550,bottom:650 }}
                            drag
                            dragElastic={111}
                            transition={{type:'spring',stiffness:300}}
                            textshadow={'1px 1px 1px black'}
                            color={colorSecond}
                            fontSize={fontSizeSecond}
                            dragConstraints={dragConstraints}
                            ref={TextOverlaySecondRef}
                        > {inputTextSecond}</OverlayTextStyled>
                    {/*</OverlayTextDiveStyled >*/}




                </ImageDivStyled>
                <UploadImageDivStyled image={backgroundImage}/>
                 </WorkImageDivStyled>
               </ResizeDiv2>
            </WorkingDivBounderiesStyled>
            <Snackbars1 isOpen={isSnackbar}/>
            {isMergeFormOpen && <ModalMergeForm uplaodImage={uploadImage}
                                                isMergeFormOpen={isMergeFormOpen}
                                                setIsMergeFormOpen={setIsMergeFormOpen}
                                                handleSendMergeForm={handleSendMergeForm}
                                                setImageTitle={setImageTitle}
                                                imageTitle={imageTitle}
                                                setImageFormat={setImageFormat}
                                                imageFormat={imageFormat}


            /> }
        </WorkPageStyled>


)
}
export default WorkSpace