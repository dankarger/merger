import React from "react";
import ToolBar from "../ToolBar/ToolBar";
import {MenuLeftStyled} from "../../styles/MenuLeft.styled";

const MenuLeft=({imageCallback,isMenuOpen,isTextMenuOpen,textCallback}) => {


    return (
        <MenuLeftStyled>
            <ToolBar imageCallback={imageCallback}
                     isMenuOpen={isMenuOpen}
                     textCallback={textCallback}
                     isTextMenuOpen={isTextMenuOpen}/>
        </MenuLeftStyled>
    )
}
export default MenuLeft