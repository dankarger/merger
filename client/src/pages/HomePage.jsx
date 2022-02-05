import React, {useState, useEffect} from "react";
import {HomePageStyled} from "../styles/HomePage.styled";
import {Image} from 'cloudinary-react'
import myApi from '../api/Api';
// import SimpleAccordion from "../components/Accordion/Accordion";
import ListDividers from "../components/Divider/Divider";
import StandardImageList from "../components/ImageList/ImageList";
import ActionAreaCard from "../components/Card/Card";
import {HeadingH1Styled} from "../styles/HeadingH1.styled";
import {HeadingH1Variants} from "../animations/animations";

const HomePage = () => {

    return (
        <HomePageStyled>
            <HeadingH1Styled
            variants={HeadingH1Variants}
            initial='initial'
            animate='animate'
            >Welcome to PhotoBasta</HeadingH1Styled>
            <ListDividers/>


        </HomePageStyled>
    )
}
export default HomePage