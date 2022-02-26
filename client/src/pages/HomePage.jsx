import React, {useState, useEffect} from "react";
import {HomePageStyled} from "../styles/HomePage.styled";
import HomePageContent from "../components/HomePageContent/HomePageContent";
import HomePageMenu from "../components/HomePageMenu/HomePageMenu";
import TopMenuBar from "../components/TopMenuBar/TopMenuBar";
import HomePageInstructions from "../components/HomePageInstructions/HomePageInstructions";

const xVariants = {
    initial:{x:0},
    animate:{x:[0,1,2,3]},
    transition:{
        yoyo:Infinity
    }
}

const HomePage = () => {

    return (
        <>
        <HomePageStyled>

            <HomePageMenu />
            <HomePageContent />



        </HomePageStyled>
            <TopMenuBar />
            <HomePageInstructions >

            </HomePageInstructions>
        </>
    )
}
export default HomePage