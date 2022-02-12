import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import {HomepageMenuStyled} from "../../styles/HomepageMenu.styled";
import {motion} from "framer-motion";
import {HomeMenuButtonsVariants, HomePageMenuVariants} from "../../animations/animations";
import {Link} from 'react-router-dom'
import {Button48Styled} from "../../styles/Button48.styled";
import {DownloadButtonVariants} from "../../animations/animations";

const hover = '&:hover { transform:scale(1.2) '


export default function HomePageMenu() {
    return (
        <Box sx={{'& > :not(style)': {m: 1}, display: "flex", gap: '3rem'}}>
            <HomepageMenuStyled

            >
                <motion.div variants={HomePageMenuVariants}
                            whileHover='hover'
                            animate='animate'
                            initial='initial'

                >

                </motion.div>
                <motion.div variants={HomePageMenuVariants}
                            whileHover='hover'
                            animate='animate2'
                            initial='initial'
                >

                    <Link to='/work'>
                        <Button48Styled
                            variants={DownloadButtonVariants}
                            whileTap='tap'
                            whileHover='hover'
                        >CREATE</Button48Styled>

                    </Link>
                </motion.div>
                {/*<motion.div variants={HomePageMenuVariants}*/}
                {/*            whileHover='hover'*/}
                {/*            animate='animate3'*/}
                {/*            initial='initial'*/}
                {/*>*/}

                {/*</motion.div>*/}
                <motion.div variants={HomePageMenuVariants}
                            whileHover='hover'
                            animate='animate3'
                            initial='initial'
                >
                <Link to='/gallery'>
                    <Button48Styled
                        variants={DownloadButtonVariants}
                        whileTap='tap'
                        whileHover='hover'
                    >GALLERY</Button48Styled>
                </Link>
                </motion.div>
                <motion.div variants={HomePageMenuVariants}
                            whileHover='hover'
                            animate='animate4'
                            initial='initial2'
                >
                    <Link to='/Login'>
                        <Button48Styled
                            variants={DownloadButtonVariants}
                            whileTap='tap'
                            whileHover='hover'
                        >LOGIN/REGISTER</Button48Styled>
                    </Link>
                </motion.div>

                <motion.div variants={HomePageMenuVariants}
                            whileHover='hover'
                            animate='animate4'
                            initial='initial2'
                >
                    <Fab disabled aria-label="like">
                        <FavoriteIcon/>
                    </Fab>
                </motion.div>
            </HomepageMenuStyled>
        </Box>
    );
}
