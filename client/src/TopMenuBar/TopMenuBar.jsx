import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Tooltip from "@mui/material/Tooltip";
import {TopMenuStyled} from "../styles/TopMenu.styled";
import {motion} from "framer-motion";
import {fadeIn} from "../animations/animations";

const steps = [
    'Upload an Image',
    'Add Text and Merge',
    'Download Image',
];

export default function TopMenuBar({step=0}) {
    return (
        <TopMenuStyled as={motion.div}
                       variants={fadeIn}
                       initial='initial'
                       animate='animate2'
        >
        <Box sx={{ width: '70%',maxWidth:'1000px', whiteSpace:'nowrap' }}>
            <Stepper activeStep={step} alternativeLabel  >
                    <Step>
                        <Tooltip title="Click on Image Button" placement="bottom">
                        <StepLabel>Upload an Image</StepLabel>
                            </Tooltip >
                    </Step>
                <Step>
                    <StepLabel>Add Text</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Merge</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Download</StepLabel>
                </Step>
            </Stepper>
        </Box>
        </TopMenuStyled>
    );
}
