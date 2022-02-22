import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Tooltip from "@mui/material/Tooltip";
import {TopMenuStyled} from "../../styles/TopMenu.styled";
import {motion} from "framer-motion";
import {fadeIn} from "../../animations/animations";

const steps = [
    'Upload an Image',
    'Add Text and Merge',
    'Download Image',
];

const stepsText = {
    step1:"uplaod and image from your computer",
    step2:"add text layers ,add colors and borders",
    step3:"merge all the layers together in different formats ",
    step4:"download the result image to your computer, view all your creations in the gallery page"
}

export default function TopMenuBar({step=0}) {
    return (
        <TopMenuStyled as={motion.div}
                       variants={fadeIn}
                       initial='initial'
                       animate='animate2'
                       color='white'

        >
        <Box sx={{ width: '70%',maxWidth:'1000px', whiteSpace:'nowrap', color:'#ffffff' }}>
            <Stepper activeStep={step} alternativeLabel  >
                    <Step>
                        <Tooltip   title={stepsText.step1} placement="bottom">
                        <StepLabel sx={{color:'#ffffff'}}>Upload an Image</StepLabel>
                            </Tooltip >
                    </Step>
                <Step>
                    <Tooltip   title={stepsText.step2} placement="bottom">
                        <StepLabel>Add Text</StepLabel>
                    </Tooltip >

                </Step>
                <Step>
                    <Tooltip   title={stepsText.step3} placement="bottom">
                     <StepLabel>Merge</StepLabel>
                    </Tooltip >
                </Step>
                <Step>
                    <Tooltip   title={stepsText.step4} placement="bottom">
                      <StepLabel>Download</StepLabel>
                    </Tooltip >

                </Step>
            </Stepper>
        </Box>
        </TopMenuStyled>
    );
}
