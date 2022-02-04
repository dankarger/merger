import React, {useState} from "react";
import UploadImages from "../components/UploadImage/UploadImage";
import AddText from "../components/AddText/AddText";
import MenuLeft from "../components/Menu/MenuLeft";
import Snackbars1 from "../components/SnackBar/SnackBar1";

const WorkSpace =()=> {
    const[inputText,setInputText]=useState('');
    const[overlayColor,setOverlayColor]=useState('');
    const[isImgMenuOpen,setIsImgMenuOpen]=useState(false);
    const[isTextMenuOpen,setIsTextMenuOpen]=useState(false);
    const[backgroundImage,setBackgroundImage]=useState();

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
           <UploadImages overlay={inputText} overlayColor={overlayColor} setBackgroundImage={setBackgroundImage}/>}
            {isTextMenuOpen &&
            <AddText callback={handleInputChange} value={inputText}/>
            }
            <img src={backgroundImage} alt="chosen" style={{height: '100%'}} />

            <Snackbars1 isOpen={false}/>
        </div>


)
}
export default WorkSpace