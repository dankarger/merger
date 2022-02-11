import React from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {HomePageContentStyled} from "../../styles/HomePageContent.styled";
import {motion} from 'framer-motion'
import {pathVariants,svgVariants,fadeIn} from "../../animations/animations";
import {HomePageSVGStyled} from "../../styles/HomePageSVG.styled";
import {ReactComponent as ReactLogo} from "../../pages/logowave.svg";

const HomePageContent=()=> {

    return(
        <HomePageContentStyled>
            <HomePageSVGStyled
            variants={fadeIn}
            initial='initial'
            animate='animate'

            >
        {/*<motion.svg style={{fontSize:'34vw'}}*/}
        {/*variants={svgVariants}*/}
        {/*initial='hidden'*/}
        {/*animate='visible'*/}
        {/*>*/}
                <ReactLogo />

        {/*        <AddPhotoAlternateIcon sx={{fontSize:'55vw'}}*/}
        {/*                           variants={pathVariants}*/}
        {/*                           initial='hidden'*/}
        {/*                           animate='visible'/>*/}
        {/*/!*</motion.svg>*!/*/}
            </HomePageSVGStyled>
        </HomePageContentStyled>
    )
}
export default HomePageContent