import React, {useState} from "react";
import myApi from '../../api/Api';

export default function Upload() {
    const[fileInputState,setFileInputState]=useState('')
    const[selectedFile,setSelectedFile]=useState('');
    const [previewSource,setPreviewSource]=useState()

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
        console.log(base64EncodedImage);
        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-Type': 'application/json' },
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