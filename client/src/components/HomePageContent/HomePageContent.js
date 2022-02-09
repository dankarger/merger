import React from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {HomePageContentStyled} from "../../styles/HomePageContent.styled";
import {motion} from 'framer-motion'
import {pathVariants,svgVariants} from "../../animations/animations";
import {HomePageSVGStyled} from "../../styles/HomePageSVG.styled";

const HomePageContent=()=> {

    return(
        <HomePageContentStyled>
            <HomePageSVGStyled
            variants={svgVariants}
            initial='initial'
            animate='animate'
            >
        {/*<motion.svg style={{fontSize:'34vw'}}*/}
        {/*variants={svgVariants}*/}
        {/*initial='hidden'*/}
        {/*animate='visible'*/}
        {/*>*/}

            <AddPhotoAlternateIcon sx={{fontSize:'55vw'}}
                                   variants={pathVariants}
                                   initial='hidden'
                                   animate='visible'/>
        {/*</motion.svg>*/}
            </HomePageSVGStyled>
        </HomePageContentStyled>
    )
}
export default HomePageContent