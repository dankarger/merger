import React from "react";
import {MenuLeftPlaceHolderStyled} from "../../styles/MenuLeftPlaceHolder.styled";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import menuLeftPlaceHoldertext from './MenuLeftPlaceHolder.lib'
import {ReactComponent as ReactLogo} from "../../pages/svg/logo17-tiger.svg";

const MenuLeftPlaceHolder=()=>{


    return(
        <MenuLeftPlaceHolderStyled>

                <AddPhotoAlternateIcon style={{opacity:0.1,fontSize:'15rem'}}/>
           {/*<ReactLogo style={{opacity:0.5,width:'400px',transform:'scale:(0.3)'}}/>*/}
            <p>{menuLeftPlaceHoldertext.p1}</p>
            <p>{menuLeftPlaceHoldertext.p2}</p>
            <p>{menuLeftPlaceHoldertext.p3}</p>
            <p>{menuLeftPlaceHoldertext.p4}</p>
            <p>{menuLeftPlaceHoldertext.p5}</p>
            <p>{menuLeftPlaceHoldertext.p6}</p>
            <p>{menuLeftPlaceHoldertext.p7}</p>


        </MenuLeftPlaceHolderStyled>
    )
}


export default MenuLeftPlaceHolder