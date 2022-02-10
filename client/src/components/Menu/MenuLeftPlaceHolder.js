import React from "react";
import {MenuLeftPlaceHolderStyled} from "../../styles/MenuLeftPlaceHolder.styled";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const MenuLeftPlaceHolder=()=>{


    return(
        <MenuLeftPlaceHolderStyled>
            <AddPhotoAlternateIcon style={{opacity:0.1,fontSize:'15rem'}}/>
        </MenuLeftPlaceHolderStyled>
    )
}


export default MenuLeftPlaceHolder