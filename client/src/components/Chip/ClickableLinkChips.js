import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {motion} from 'framer-motion'
import {DownloadButtonVariants} from "../../animations/animations";

export default function ClickableLinkChips({icon, size}) {
    return (
        <Stack direction="row" spacing={1}>
            {/*<Chip label="Clickable Link" component="a" href="#basic-chip" clickable />*/}

            <Chip as={motion.button}
                  // variants={DownloadButtonVariants}
                  // whileHover='hover'
                label={icon}
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
                size={size}

            />

        </Stack>
    );
}
