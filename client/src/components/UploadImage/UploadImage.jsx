import React, {useEffect, useState, useRef } from "react";
import myApi from '../../api/Api';
import Button from "@mui/material/Button";
import {WorkImageDivStyled} from "../../styles/WorkImageDiv.styled";
import {OverlayTextStyled} from "../../styles/OverlayText.styled";
import {ContainerStyled} from "../../styles/Container.styled";
// import { SketchPicker } from 'react-color'
import { ColorPicker, createColor } from 'material-ui-color';
import { ColorPalette } from 'material-ui-color';
import {motion, useAnimation, useMotionValue} from 'framer-motion'
import Snackbars1 from "../SnackBar/SnackBar1";
import {UplaodImageDivStyled} from "../../styles/UplaodImageDiv.styled";
import {UploadImageFormStyled} from "../../styles/UploadImageForm.styled";


const palette = {
    red: '#ff0000',
    blue: '#0000ff',
    green: '#00ff00',
    yellow: 'yellow',
    cyan: 'cyan',
    lime: 'lime',
    gray: 'gray',
    orange: 'orange',
    purple: 'purple',
    black: 'black',
    white: 'white',
    pink: 'pink',
    darkblue: 'darkblue',
};


export default function UploadImages({overlay,setBackgroundImage,onMouseMove,uploadImage}) {
    const[fileInputState,setFileInputState]=useState('')
    const[selectedFile,setSelectedFile]=useState('');
    const [previewSource,setPreviewSource]=useState()
     // const[overlayText,setOverlayText] = useState({overlay})
    const[text1,setText1] = useState({overlay})
    // const [color, setColor] = useState();
    // const [color, setColor] = useState(createColor("#000"));
    const [position,setPosition] = useState({x:0,y:0})
    const dragRef = useRef(null);
    const animation = useAnimation();
    const[isSnackbar,setIsSnackBar]=useState(false)
    // let xPos = useRef({x:0,y:0});
    // const constraintsRef = useRef(null)
    const x = useMotionValue(0);

    // const onMouseMove=(e) =>{
    //     console.log(e)
    //     xPos ={ x: e.x, y: e.y };
    //     console.log('p',xPos)
    // }
    // const handleChange = (value) => {
    //     console.log("onChange=", value);
    //     setColor(value);
    // };

    // useEffect(()=>{
    //     setOverlayText(overlay)
    //
    // },[overlay])
    const handleFileInputChane = (e)=>{
        const file = e.target.files[0];
        previewFile(file);

    }
    const handleMessageOpen=()=>{
        setIsSnackBar(false)

    }

    const previewFile= (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=> {
            setPreviewSource(reader.result)
            setBackgroundImage(reader.result)
        }


    }
    const handleSubmitFile = async (e) => {
        e.preventDefault();
        if(!previewSource) return
        // const reader = new FileReader();
        // reader.readAsDataURL(selectedFile)
        uploadImage(previewSource);
    }
    // const uploadImage= async (base64EncodedImage) => {
    //     console.log('ggg',overlayText);
    //     let overlayObject = {
    //         overlayText:overlayText,
    //         fontSize:'80',
    //         color:color,
    //         position:[xPos.x,xPos.y],
    //         windowSize:[window.innerWidth,window.innerHeight]
    //     }
    //     try {
    //         await myApi.post('/images', {
    //             // method: 'POST',
    //             // body: JSON.stringify({ data: base64EncodedImage }),
    //              data: base64EncodedImage ,overlay:{overlayObject},
    //             headers: { 'Content-Type': 'application/json',
    //                         'Access-Control-Allow-Origin': '*'}
    //         });
    //     }catch (error) {
    //         console.log(error)
    //     }
    // }
    return (
        <UplaodImageDivStyled>
            <h1>upload</h1>
            <UploadImageFormStyled action="" onSubmit={handleSubmitFile} className='form'>
                <input type="file" name='image'
                       onChange={handleFileInputChane}
                       value={fileInputState}
                       className='form-input'
                       draggable={true}/>
                {/*<button className='btn' type='submit'>Submit</button>*/}
                <Button variant="contained" type="submit" color="success" onClick={()=>console.log('fg')}>merge</Button>
            </UploadImageFormStyled>
            {/*<div className="work-space">*/}
                {/*{previewSource && (*/}
                {/*    <WorkImageDivStyled as={motion.div} ref={constraintsRef} >*/}
                {/*        /!*img*!/*/}
                {/*        /!*<img src={previewSource} alt="chosen" style={{height: '100%'}} />*!/*/}

                {/*        <OverlayTextStyled drag*/}
                {/*                           // dragConstraints={{ left:'50%',top:50,right:550,bottom:650 }}*/}
                {/*                           dragElastic={111}*/}
                {/*                           transition={{type:'spring',stiffness:300}}*/}
                {/*                           textShadow={'1px 1px 1px black'}*/}
                {/*                           color={color.css.backgroundColor}*/}
                {/*                           fontSize={window.innerWidth / 65 +"vw"}*/}
                {/*                           dragConstraints={constraintsRef}*/}
                {/*                           onDrag={onMouseMove}*/}
                {/*                            > {overlay}</OverlayTextStyled>*/}
                {/*    </WorkImageDivStyled>*/}
                {/*)}*/}
                {/*<ContainerStyled>*/}
                {/*    <ColorPicker defaultValue="transparent" value={color} onChange={handleChange}/>*/}

                {/*    <Button variant="contained" color="success" onClick={()=>{*/}
                {/*        setText1({overlay})*/}
                {/*        console.log('t1',text1)*/}
                {/*    }}>Add</Button>*/}
                {/*    /!*<div>*!/*/}
                {/*    /!*    <ColorPalette palette={palette} onSelect={handleChange}/>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</ContainerStyled>*/}
            {/*</div>*/}

        </UplaodImageDivStyled>
    )
}