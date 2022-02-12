import React from "react"
import {FooterStyled} from "../../styles/Footer.styled";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';
import ClickableLinkChips from "../Chip/ClickableLinkChips";


const Footer =()=>{

    const dateYear=()=> {

        return new Date().getFullYear()
    }

    return (
        <FooterStyled>
            <div>
                {dateYear()}<CopyrightIcon />
            </div>
            <div>
                <ClickableLinkChips icon={<LinkedInIcon sx={{color:'#ffffff'}}/>} size={'medium'}>

                </ClickableLinkChips>

                <ClickableLinkChips icon={ <GitHubIcon sx={{color:'#ffffff'}}/>} size={'medium'}>

                </ClickableLinkChips>

            </div>
        </FooterStyled>
    )
}
export default Footer