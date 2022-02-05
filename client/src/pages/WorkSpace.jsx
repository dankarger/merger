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

const WorkSpace =()=> {
    const[inputText,setInputText]=useState('');
    const[overlayColor,setOverlayColor]=useState('');
    const[isImgMenuOpen,setIsImgMenuOpen]=useState(false);
    const[isTextMenuOpen,setIsTextMenuOpen]=useState(false);
    const[backgroundImage,setBackgroundImage]=useState();
    const[overlayText,setOverlayText] = useState({inputText})
    const [color, setColor] = useState(createColor("#000"));
    const constraintsRef = useRef(null);
    const[isSnackbar,setIsSnackBar]=useState(false)


    let xPos = useRef({x:0,y:0});


    useEffect(()=>{
        setOverlayText(inputText)

    },[inputText])


    const handleChange = (value) => {
        console.log("onChange=", value);
        setColor(value);
    };

    const onMouseMove=(e) =>{
        console.log(e)
        xPos ={ x: e.x, y: e.y };
        console.log('p',xPos)
    }

    const uploadImage= async (base64EncodedImage) => {
        console.log('ggg',overlayText);
        let overlayObject = {
            overlayText:overlayText,
            fontSize:'80',
            color:color,
            position:[xPos.x,xPos.y],
            windowSize:[window.innerWidth,window.innerHeight]
        }
        try {
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
        setInputText(e.target.value)

    }

    return(
        <div>
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
                     color={color}/>
            }




            <WorkImageDivStyled as={motion.div} ref={constraintsRef} >
                {backgroundImage &&
                <ImageDivStyled>
                    <img src={backgroundImage} alt="chosen" style={{height: '100%'}}/>
                </ImageDivStyled>
                }
                {/*img*/}
                {/*<img src={previewSource} alt="chosen" style={{height: '100%'}} />*/}

                <OverlayTextStyled drag
                    // dragConstraints={{ left:'50%',top:50,right:550,bottom:650 }}
                                   dragElastic={111}
                                   transition={{type:'spring',stiffness:300}}
                                   textShadow={'1px 1px 1px black'}
                                   color={color.css.backgroundColor}
                                   fontSize={5 + window.innerWidth / 1000 +"rem"}
                                   dragConstraints={constraintsRef}
                                   onDrag={onMouseMove}
                > {inputText}</OverlayTextStyled>
            </WorkImageDivStyled>

            <Snackbars1 isOpen={isSnackbar}/>
        </div>


)
}
export default WorkSpace