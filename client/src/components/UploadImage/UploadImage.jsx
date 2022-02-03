import React, {useEffect, useState} from "react";
import myApi from '../../api/Api';
import Button from "@mui/material/Button";
import {WorkImageDivStyled} from "../../styles/WorkImageDiv.styled";
import {OverlayTextStyled} from "../../styles/OverlayText.styled";
// import { SketchPicker } from 'react-color'
import { ColorPicker, createColor } from 'material-ui-color';
import { ColorPalette } from 'material-ui-color';


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


export default function UploadImages({overlay}) {
    const[fileInputState,setFileInputState]=useState('')
    const[selectedFile,setSelectedFile]=useState('');
    const [previewSource,setPreviewSource]=useState()
     const[overlayText,setOverlayText] = useState({overlay})
    const[text1,setText1] = useState({overlay})
    // const [color, setColor] = useState();
    const [color, setColor] = useState(createColor("#000"));

    const handleChange = (value) => {
        console.log("onChange=", value);
        setColor(value);
    };

    useEffect(()=>{
        setOverlayText(overlay)

    },[overlay])
    const handleFileInputChane = (e)=>{
        const file = e.target.files[0];
        previewFile(file);

    }
    const previewFile= (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=> {
            setPreviewSource(reader.result)
        }
    }
    const handleSubmitFile = (e) => {

        e.preventDefault();
        if(!previewSource) return
        // const reader = new FileReader();
        // reader.readAsDataURL(selectedFile)
        uploadImage(previewSource);
    }
    const uploadImage= async (base64EncodedImage) => {
        console.log('ggg',overlayText);
        let overlayObject = {
            overlayText:overlayText,
            fontSize:'80',
            color:color,
            position:'center'
        }
        try {
            await myApi.post('/images', {
                // method: 'POST',
                // body: JSON.stringify({ data: base64EncodedImage }),
                 data: base64EncodedImage ,overlay:{overlayObject},
                headers: { 'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'}
            });
        }catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Upload</h1>
            <form action="" onSubmit={handleSubmitFile} className='form'>
                <input type="file" name='image'
                       onChange={handleFileInputChane}
                       value={fileInputState}
                       className='form-input'
                       draggable={true}/>
                {/*<button className='btn' type='submit'>Submit</button>*/}
                <Button variant="contained" type="submit" color="success" onClick={()=>console.log('fg')}>merge</Button>


            </form>
            <div>
                <div>
                    {/*<SketchPicker />*/}
                </div>
            </div>
            <div className="work-space">
                {previewSource && (
                    <WorkImageDivStyled  >
                        <img src={previewSource} alt="chosen" style={{height: '100%'}} />
                        <OverlayTextStyled textShadow={'1px 1px 1px black'} color={color.css.backgroundColor} fontSize={window.innerWidth / 120 +"vw"} > {overlay}</OverlayTextStyled>
                    </WorkImageDivStyled>
                )}
                <Button variant="contained" color="success" onClick={()=>{
                    setText1({overlay})
                    console.log('t1',text1)
                }}>Add</Button>
                <ColorPicker defaultValue="transparent" value={color} onChange={handleChange}/>
                <div>
                    <ColorPalette palette={palette} onSelect={handleChange}/>
                </div>
            </div>

        </div>
    )
}