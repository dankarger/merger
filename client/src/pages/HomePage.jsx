import React, {useState, useEffect} from "react";
import {HomePageStyled} from "../styles/HomePage.styled";
import HomePageContent from "../components/HomePageContent/HomePageContent";
import HomePageMenu from "../components/HomePageMenu/HomePageMenu";
import TopMenuBar from "../components/TopMenuBar/TopMenuBar";
import {motion} from "framer-motion";
import {fadeIn,HomePageMenuVariants} from "../animations/animations";

const xVariants = {
    initial:{x:0},
    animate:{x:[0,1,2,3]},
    transition:{
        yoyo:Infinity
    }
}
const HomePage = () => {
    const[stepCounter,setStepCounter]=useState(0)


    // useEffect(()=>{
    //
    //
    //       setInterval(()=>{
    //           if(stepCounter<=3) {
    //               setStepCounter(prev => prev + 1)
    //           }else {
    //               setStepCounter(0)
    //           }
    //
    //       },2000)
    //     return ()=> {
    //
    //     }
    // },[stepCounter])


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