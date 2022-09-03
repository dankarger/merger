import React, {useEffect, useState, useRef} from "react";
import {DetailCardStyled} from "../../styles/DetailCard.styled";
import CardDetail from "../Card/CardDetail";
import {DetailCardStyleVariants} from "../../animations/animations";
import {motion,AnimatePresence} from 'framer-motion'


const DetailCard =({card,handleSelectCard})=> {
    const[showModel,setShowModel]=useState(true)

    useEffect(()=>{

        return ()=>{
            setShowModel(true)
        }
    },[showModel])
        return(
    <AnimatePresence exitBeforeEnter onExitComplete={()=>{setShowModel(false)}}>
        <DetailCardStyled
        variants={DetailCardStyleVariants}
        initial='initial'
        animate='animate'
        exit='exit'

        >
            <CardDetail card={card} handleSelectCard={handleSelectCard} />
        </DetailCardStyled>
    </AnimatePresence>
    )
}
export default DetailCard