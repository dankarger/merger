import React, {useState, useEffect} from "react";
import {HomePageStyled} from "../styles/HomePage.styled";
import {Image} from 'cloudinary-react'
import ListDividers from "../components/Divider/Divider";
import {HeadingH1Styled} from "../styles/HeadingH1.styled";
import {HeadingH1Variants} from "../animations/animations";
import HomePageContent from "../components/HomePageContent/HomePageContent";
import HomePageMenu from "../components/HomePageMenu/HomePageMenu";

const HomePage = () => {

    return (
        <HomePageStyled>
            <HomePageContent />
            <HeadingH1Styled
            variants={HeadingH1Variants}
            initial='initial'
            animate='animate         '
            >Welcome to PhotoBasta</HeadingH1Styled>
            <HomePageMenu />
            <ListDividers/>


        </HomePageStyled>
    )
}
export default HomePage