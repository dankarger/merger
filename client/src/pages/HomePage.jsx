import React, {useState, useEffect} from "react";
import {HomePageStyled} from "../styles/HomePage.styled";
import {Image} from 'cloudinary-react'
import ListDividers from "../components/Divider/Divider";
import {HeadingH1Styled} from "../styles/HeadingH1.styled";
import {HeadingH1Variants, MenuLeftVariants} from "../animations/animations";
import HomePageContent from "../components/HomePageContent/HomePageContent";
import HomePageMenu from "../components/HomePageMenu/HomePageMenu";
import TopMenuBar from "../TopMenuBar/TopMenuBar";
import {GreetingStyled} from "../styles/Greeting.styled";
import {motion} from "framer-motion";
import {fadeIn,HomePageMenuVariants} from "../animations/animations";
import {Button48Styled} from "../styles/Button48.styled";
import {ReactComponent as ReactLogo} from './logowave.svg';

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
            {/*<HeadingH1Styled*/}
            {/*variants={HeadingH1Variants}*/}
            {/*initial='initial'*/}
            {/*animate='animate         '*/}
            {/*>Welcome to PhotoBasta</HeadingH1Styled>*/}
{/*<Button48Styled>buttin</Button48Styled>*/}
            <HomePageMenu />
            <HomePageContent />

                {/*<motion.div*/}
                {/*    variants={fadeIn}*/}
                {/*    initial='initial'*/}
                {/*    animate='animate'*/}
                {/*>*/}
                    <TopMenuBar as={motion.div}
                                step={stepCounter}
                //                 variants={MenuLeftVariants}
                // initial='initial'
                // animate='animate'
                    />
                {/*</motion.div>*/}


        </HomePageStyled>
    )
}
export default HomePage