import React, {createRef, useContext, useEffect, useRef, useState} from "react";
import UploadImages from "../components/UploadImage/UploadImage";
import AddText from "../components/AddText/AddText";
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
import {Link} from "react-router-dom";
import {UserContext} from "../App";
import html2canvas from 'html2canvas';

const WorkSpace =()=> {
    const[inputText,setInputText]=useState('');
    const[overlayColor,setOverlayColor]=useState('');
    const[isImgMenuOpen,setIsImgMenuOpen]=useState(false);
    const[isTextMenuOpen,setIsTextMenuOpen]=useState(false);
    const[backgroundImage,setBackgroundImage]=useState();
    const[overlayText,setOverlayText] = useState({inputText})
    const [color, setColor] = useState(createColor("#000"));
    const[backgroundColor,setBackGroundColor]=useState({css:{backgroundColor:'#333333'}});
    const[isBackgroundMenuOpen,setIsBackGroundMenuOpen]=useState()
    const [cursorPosition,setCursorPosition]=useState({x:0,y:0})
    const[isSnackbar,setIsSnackBar]=useState(false)
    const constraintsRef = useRef(null);
    const constraintsRefAddText = useRef(null);
    const TextOverlayRef = useRef();
    const position = useRef('top');
    const [positionState,setPositionState]=useState('center');
    const [fontSize,setFontSize]=useState('80');
    const [isMergeFormOpen,setIsMergeFormOpen]= useState(false);
    const[uploadedFile,setUploadedFile] = useState('');
    const[imageTile,setImageTitle]=useState('Title');
    const downloadLink = useRef('')
    const[downLoadLink,setDownloadLink]=useState('')

    const [currentUser,setCurrentUser]= useContext(UserContext)
    let xPos = useRef({x:0,y:0});
    const overlayDivRef = useRef(null)


    const handleSendMergeForm = async ()=>{
        if(uploadedFile) {
            console.log('file',uploadedFile)
          await  uploadImage(uploadedFile)
        }
    }

    useEffect(()=>{
        setOverlayText(inputText)

    },[inputText])

    const testing=(e)=> {

        console.log('e',e)
    }

    const handleChange = (value) => {

        setColor(value);
    };
    const handleBackgroundChange =(value)=> {
        setBackGroundColor(value)
    }
   const _onMouseMove=(e) =>{
       console.log(e.nativeEvent.offsetX,e.nativeEvent.offsetY)
        setCursorPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
    const onMouseMove=(e) =>{
        const obj = {x:e.x,y:e.y}
        console.log('obj',obj)
        xPos.current =obj;
        console.log('p',xPos)
        console.log('c',constraintsRef.current.naturalWidth,constraintsRef.current.naturalHeight)
    }

    const uploadImage= async (base64EncodedImage) => {

         try {

            const combinedLayers =  await captureHtmlToJpg()
             console.log('ddsdasdasdasdasdasddddsa',combinedLayers)
            let overlayObject = {
                overlayText:overlayText,
                fontSize:fontSize,
                color:color,
                backgroundColor:backgroundColor,
                // position:[xPos.x,xPos.y],
                // position:[Math.floor(xPos.current.y), Math.floor(xPos.current.x)],
                position:[Math.floor(xPos.current.x ), Math.floor(xPos.current.y)],

                gravity:positionState,
                title:imageTile,
                windowSize:[window.innerWidth,window.innerHeight],
                imageSize:[constraintsRef.current.naturalWidth,constraintsRef.current.naturalHeight]

            }
            // console.log('h',overlayObject)
            // const link = await myApi.post('/images', {
            //     // method: 'POST',
            //     // body: JSON.stringify({ data: base64EncodedImage }),
            //     data: base64EncodedImage ,overlay:{overlayObject},user:{currentUser},
            //     headers: { 'Content-Type': 'application/json',
            //         'Access-Control-Allow-Origin': '*'}
            // });
                console.log('combine',combinedLayers)
             // const reader = new FileReader();
             // reader.readAsDataURL(combinedLayers);
             // reader.onloadend = ()=> {
             //     console.log('reader',reader.result)
             //     setBackgroundImage(reader.result)
             //     setUploadedFile(reader.result)
             // }




             const link = await myApi.post('/images', {
                // method: 'POST',
                // body: JSON.stringify({ data: overlayDivRef }),
                data: combinedLayers ,overlay:{overlayObject},user:currentUser,
                headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'}
            });
            setIsSnackBar(!isSnackbar);

            downloadLink.current = link.data.secure_url
            console.log('fuck',downloadLink)
            setDownloadLink(downloadLink)
            console.log('dddddddddd',downLoadLink)

        }catch (error) {

            console.log(error)
        }
    }

    const handleInputChange = (e)=>{
        setInputText(e.target.value);
    }

    // const draw = (ctx, frameCount) => {
    //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    //     ctx.fillStyle = '#000000'
    //     ctx.beginPath()
    //     ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    //     ctx.fill()
    // }

    const handleMergeButton =()=>{
       setIsMergeFormOpen(true);

    }
    const handleCloseMergeForm =()=>{
        setIsMergeFormOpen(false);

    }

    const captureHtmlToJpg =async ()=> {

       const response = await  html2canvas(overlayDivRef.current).then(function (canvas) {
       return canvas.toDataURL("image/jpeg", 0.9)


    })
    console.log('res',response)
        // return response
    return response
    }

    return(
        <WorkPageStyled ref={constraintsRefAddText}>

            <MenuLeft imageCallback={setIsImgMenuOpen}
                      isMenuOpen={isImgMenuOpen}
                      textCallback={setIsTextMenuOpen}
                      isTextMenuOpen={isTextMenuOpen}
                      isBackgroundMenuOpen={isBackgroundMenuOpen}
                      setIsBackGroundMenuOpen={setIsBackGroundMenuOpen}
            />
            {/*{isImgMenuOpen &&*/}

           <UploadImages overlay={inputText}
                         overlayColor={overlayColor}
                         setBackgroundImage={setBackgroundImage}
                         onMouseMove={onMouseMove}
                         uploadImage={uploadImage}
                         handleMergeButton={handleMergeButton}
                         handleCloseMergeForm={handleCloseMergeForm}
                         setUploadedFile={setUploadedFile}
                         downloadLink={downloadLink}

           />
            {/*}*/}
            {isTextMenuOpen &&
            <AddText callback={handleInputChange}
                     value={inputText}
                     handleChange={handleChange}
                     color={color}
                     drag
                     dragElastic={111}
                     dragConstraints={constraintsRefAddText}
                     position={position}
                     positionsState={positionState}
                     setPositionState={setPositionState}
                     fontSize={fontSize}
                     setFontSize={setFontSize}
            />
            }
            {isBackgroundMenuOpen && <AddBackGroundColor backGroundColor={backgroundColor} setBackGroundColor={handleBackgroundChange}/>}
            <WorkImageDivStyled as={motion.div}
                                backGroundColor={backgroundColor.css.backgroundColor}
                                    ref={overlayDivRef}
            >
                <button onClick={captureHtmlToJpg}>capture</button>

                {!backgroundImage && <SkeletonDiv />}
                {backgroundImage &&

                <ImageDivStyled   >
                    <img ref={constraintsRef}   src={backgroundImage} alt="chosen" style={{height: '100%'}}/>
                    <OverlayTextDiveStyled
                    width={uploadedFile ? constraintsRef.current.naturalWidth: '100px'}
                    height={uploadedFile? constraintsRef.current.naturalHeight : '100px'}


                    >

                        <OverlayTextStyled
                            // dragConstraints={{ left:'50%',top:50,right:550,bottom:650 }}
                                             drag
                                           dragElastic={111}
                                           transition={{type:'spring',stiffness:300}}
                                           textshadow={'1px 1px 1px black'}
                                           color={color.css.backgroundColor}
                                           fontSize={fontSize}
                                           dragConstraints={constraintsRef}
                                             ref={TextOverlayRef}
                                           onDrag={onMouseMove}
                                             onClick={_onMouseMove}
                                             position={convertPositionToCss(position.current)}

                        > {inputText}</OverlayTextStyled>
                    </OverlayTextDiveStyled >
                </ImageDivStyled>
                }
                <UploadImageDivStyled image={backgroundImage}/>
                {/*<Canvas draw={draw} />*/}
            </WorkImageDivStyled>

            <Snackbars1 isOpen={isSnackbar}/>
            {isMergeFormOpen && <ModalMergeForm uplaodImage={uploadImage}
                                                isMergeFormOpen={isMergeFormOpen}
                                                setIsMergeFormOpen={setIsMergeFormOpen}
                                                handleSendMergeForm={handleSendMergeForm}
                                                setImageTitle={setImageTitle}
                                                imageTitle={imageTile}

            /> }

        </WorkPageStyled>


)
}
export default WorkSpace