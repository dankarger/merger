import React from "react";
import {HomePageContentStyled} from "../../styles/HomePageContent.styled";
import {pathVariants,svgVariants,fadeIn} from "../../animations/animations";
import {HomePageSVGStyled} from "../../styles/HomePageSVG.styled";
import {ReactComponent as ReactLogo} from "../../pages/svg/svg/logowave.svg";

const HomePageContent=()=> {

    return(
        <HomePageContentStyled>
            <HomePageSVGStyled
            variants={svgVariants}
            initial='initial'
            animate='animate'

            >
                <HomePageSVGStyled>
                    <ReactLogo />
                </HomePageSVGStyled>
            </HomePageSVGStyled>
        </HomePageContentStyled>
    )
}
export default HomePageContent