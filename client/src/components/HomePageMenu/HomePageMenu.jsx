import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import {HomepageMenuStyled} from "../../styles/HomepageMenu.styled";
import {motion} from "framer-motion";
import {HomeMenuButtonsVariants} from "../../animations/animations";

const hover = '&:hover { transform:scale(1.2) '


export default function HomePageMenu() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 }, display:"flex",gap:'2rem' }}>
            <HomepageMenuStyled>
                <Fab as={motion.button}  variants={HomeMenuButtonsVariants} whilehover='hover' variant="extended"  color="primary">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Create
                </Fab>
                <Fab variant="extended" variants={HomeMenuButtonsVariants} whilehover='hover'>
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>

                <Fab variant="extended" variants={HomeMenuButtonsVariants} whilehover='hover'>

                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
            <Fab color="primary" aria-label="add" variants={HomeMenuButtonsVariants} whilehover='hover'>
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit" variants={HomeMenuButtonsVariants} whilehover='hover'>
                <EditIcon />
            </Fab>
            <Fab variant="extended" variants={HomeMenuButtonsVariants} whilehover='hover'>
                <NavigationIcon sx={{ mr: 1 }} />
                Navigate
            </Fab>
            <Fab disabled aria-label="like">
                <FavoriteIcon />
            </Fab>
            </HomepageMenuStyled>
        </Box>
    );
}
