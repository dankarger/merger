import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {motion} from 'framer-motion'
import {DownloadButtonVariants} from "../../animations/animations";
import {Link} from 'react-router-dom'

export default function ClickableLinkChips({icon, size, hrefLink}) {
    return (
        <Stack direction="row" spacing={1}>
            {/*<Chip label="Clickable Link" component="a" href="#basic-chip" clickable />*/}
            <a href={hrefLink} target='_blank'>
                <Chip
                    as={motion.button}
                      variants={DownloadButtonVariants}
                      whileHover='hover'
                    whileTap='tap'
                    label={icon}
                    component="a"
                    href={hrefLink}
                    variant="outlined"
                    clickable
                    size={size}
                />
            </a>
        </Stack>
    );
}
