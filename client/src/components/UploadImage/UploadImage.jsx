import React, {useState} from "react";
import myApi from '../../api/Api';

export default function UploadImages({overlay}) {
    const[fileInputState,setFileInputState]=useState('')
    const[selectedFile,setSelectedFile]=useState('');
    const [previewSource,setPreviewSource]=useState()
     const[overlayText,setOverlayText] = useState({overlay})

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
        console.log('sub')
        e.preventDefault();
        if(!previewSource) return
        // const reader = new FileReader();
        // reader.readAsDataURL(selectedFile)
        uploadImage(previewSource);
    }
    const uploadImage= async (base64EncodedImage) => {
        console.log('ggg',overlayText);
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
                <button className='btn' type='submit'>Submit</button>
            </form>

            {previewSource && (
                <img src={previewSource} alt="chosen" style={{height: '300px'}} />
            )}
        </div>
    )
}