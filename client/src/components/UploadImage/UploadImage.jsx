import React, {useEffect, useState} from "react";
import myApi from '../../api/Api';
import Button from "@mui/material/Button";
import {WorkImageDivStyled} from "../../styles/WorkImageDiv.styled";
import {OverlayTextStyled} from "../../styles/OverlayText.styled";
import { HexColorPicker, HexColorInput } from "react-colorful";


export default function UploadImages({overlay}) {
    const[fileInputState,setFileInputState]=useState('')
    const[selectedFile,setSelectedFile]=useState('');
    const [previewSource,setPreviewSource]=useState()
     const[overlayText,setOverlayText] = useState({overlay})
    const[text1,setText1] = useState({overlay})
    const [color, setColor] = useState("#333333");


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
                 data: base64EncodedImage ,overlay:{overlayText},
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
                    {/*<HexColorPicker color={color} onChange={()=>setColor(color)} />*/}
                    {/*<HexColorInput color={color} onChange={setColor} />*/}
                </div>
            </div>
            <div className="work-space">
                {previewSource && (
                    <WorkImageDivStyled  >
                        <img src={previewSource} alt="chosen" style={{height: '100%'}} />
                        <OverlayTextStyled color={color} fontSize={window.innerWidth / 120 +"vw"} > {overlay}</OverlayTextStyled>
                    </WorkImageDivStyled>
                )}
                <Button variant="contained" color="success" onClick={()=>{
                    setText1({overlay})
                    console.log('t1',text1)
                }}>Add</Button>


            </div>

        </div>
    )
}