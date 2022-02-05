import React, {useEffect, useRef, useState} from "react";
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
import {Skeleton} from "@mui/material";

const WorkSpace =()=> {
    const[inputText,setInputText]=useState('');
    const[overlayColor,setOverlayColor]=useState('');
    const[isImgMenuOpen,setIsImgMenuOpen]=useState(false);
    const[isTextMenuOpen,setIsTextMenuOpen]=useState(false);
    const[backgroundImage,setBackgroundImage]=useState();
    const[overlayText,setOverlayText] = useState({inputText})
    const [color, setColor] = useState(createColor("#000"));
    const [cursorPosition,setCursorPosition]=useState({x:0,y:0})
    const[isSnackbar,setIsSnackBar]=useState(false)
    const constraintsRef = useRef(null);
    const constraintsRefAddText = useRef(null);
    const TextOverlayRef = useRef()

    let xPos = useRef({x:0,y:0});


    useEffect(()=>{
        setOverlayText(inputText)

    },[inputText])

    const testing=(e)=> {

        console.log('e',e)
    }

    const handleChange = (value) => {
        console.log("onChange=", value);
        setColor(value);
    };
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
        // console.log('ggg',overlayText);

        try {
            console.log('curPos',cursorPosition)
            console.log('xpos',xPos)
            let overlayObject = {
                overlayText:overlayText,
                fontSize:'80',
                color:color,
                // position:[xPos.x,xPos.y],
                // position:[Math.floor(xPos.current.y), Math.floor(xPos.current.x)],
                position:[Math.floor(xPos.current.x ), Math.floor(xPos.current.y)],
                // gravity:'center',
                // position:[cursorPosition.x,cursorPosition.y],
                // position:[TextOverlayRef.current],
                windowSize:[window.innerWidth,window.innerHeight],
                imageSize:[constraintsRef.current.naturalWidth,constraintsRef.current.naturalHeight]

            }
            await myApi.post('/images', {
                // method: 'POST',
                // body: JSON.stringify({ data: base64EncodedImage }),
                data: base64EncodedImage ,overlay:{overlayObject},
                headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'}
            });
            setIsSnackBar(!isSnackbar)
        }catch (error) {

            console.log(error)
        }
    }

    const handleInputChange = (e)=>{
        setInputText(e.target.value);
    }

    return(
        <WorkPageStyled ref={constraintsRefAddText}>
            <MenuLeft imageCallback={setIsImgMenuOpen}
                      isMenuOpen={isImgMenuOpen}
                      textCallback={setIsTextMenuOpen}
                      isTextMenuOpen={isTextMenuOpen}
            />

            {isImgMenuOpen &&
           <UploadImages overlay={inputText}
                         overlayColor={overlayColor}
                         setBackgroundImage={setBackgroundImage}
                         onMouseMove={onMouseMove}
                         uploadImage={uploadImage}

           />}
            {isTextMenuOpen &&
            <AddText callback={handleInputChange}
                     value={inputText}
                     handleChange={handleChange}
                     color={color}
                     drag
                     dragElastic={111}
                     dragConstraints={constraintsRefAddText}
            />
            }
            <WorkImageDivStyled as={motion.div}  >
                {!backgroundImage && <Skeleton  animation="wave" variant="rectangular" width={510} height={318} />}
                {backgroundImage &&
                <ImageDivStyled  >

                    <img ref={constraintsRef}   src={backgroundImage} alt="chosen" style={{height: '100%'}}/>
                    <OverlayTextStyled
                        // dragConstraints={{ left:'50%',top:50,right:550,bottom:650 }}
                                         drag
                                       dragElastic={111}
                                       transition={{type:'spring',stiffness:300}}
                                       textshadow={'1px 1px 1px black'}
                                       color={color.css.backgroundColor}
                                       // fontSize={8+ "rem"}
                                       dragConstraints={constraintsRef}
                                         ref={TextOverlayRef}
                                       onDrag={onMouseMove}
                                         onClick={_onMouseMove}
                    > {inputText}</OverlayTextStyled>
                </ImageDivStyled>
                }
                <UploadImageDivStyled image={backgroundImage}/>
            </WorkImageDivStyled>

            <Snackbars1 isOpen={isSnackbar}/>
        </WorkPageStyled>


)
}
export default WorkSpace