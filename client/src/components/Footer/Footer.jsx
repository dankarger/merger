import React from "react"
import {FooterStyled} from "../../styles/Footer.styled";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';
import ClickableLinkChips from "../Chip/ClickableLinkChips";

const links = {
    github: 'https://github.com/dankarger/memes-gen2',
    linkedin: 'https://www.linkedin.com/in/dan-karger-ba36905a/'
}

const Footer = () => {

    const dateYear = () => {

        return new Date().getFullYear()
    }

    return (
        <FooterStyled>
            <div>
                <CopyrightIcon/> {dateYear()} MERGER
            </div>
            <div>
                <ClickableLinkChips hrefLink={links.linkedin} icon={<LinkedInIcon sx={{color: '#ffffff'}}/>}
                                    size={'medium'}>

                </ClickableLinkChips>

                <ClickableLinkChips hrefLink={links.github} icon={<GitHubIcon sx={{color: '#ffffff'}}/>}
                                    size={'medium'}>

                </ClickableLinkChips>

            </div>
        </FooterStyled>
    )
}
export default Footer