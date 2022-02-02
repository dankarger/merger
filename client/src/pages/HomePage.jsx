import React, {useState, useEffect} from "react";
import {HomePageStyled} from "../styles/HomePage.styled";
import {Image} from 'cloudinary-react'
import myApi from '../api/Api';
// import SimpleAccordion from "../components/Accordion/Accordion";
import ListDividers from "../components/Divider/Divider";
import StandardImageList from "../components/ImageList/ImageList";
import ActionAreaCard from "../components/Card/Card";

const HomePage = () => {

    return (
        <HomePageStyled>
            <h1>Welcome to HomePage</h1>
            <ListDividers/>


        </HomePageStyled>
    )
}
export default HomePage