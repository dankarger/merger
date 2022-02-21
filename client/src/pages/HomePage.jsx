import React, {useState, useEffect} from "react";
import {HomePageStyled} from "../styles/HomePage.styled";
import HomePageContent from "../components/HomePageContent/HomePageContent";
import HomePageMenu from "../components/HomePageMenu/HomePageMenu";
import TopMenuBar from "../components/TopMenuBar/TopMenuBar";

const xVariants = {
    initial:{x:0},
    animate:{x:[0,1,2,3]},
    transition:{
        yoyo:Infinity
    }
}

const HomePage = () => {

    return (
        <HomePageStyled>

            <HomePageMenu />
            <HomePageContent />
                    <TopMenuBar
                    />
        </HomePageStyled>
    )
}
export default HomePage