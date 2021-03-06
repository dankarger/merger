import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import {ButtonYoYoVariants, DetailCardStyleVariants} from "../../animations/animations";

import {motion} from "framer-motion";
import CustomDeleteIconChips from "../Chip/CustomeDeleteChip";
import {useContext} from "react";
import {UserContext} from "../../App";
import {StrongStyled} from "../../styles/Strong.styled";


export default function CardDetail({card,
                                       handleSelectCard,
                                       handleConfirmDelete,
                                       downloadCard,
                                       handleDeleteCard,
                                       setIsDialogueOpen}) {
    const [currentUser,setCurrentUser]= useContext(UserContext)

    const handleDeleteChip=()=>{

        return handleDeleteCard(card)
    }

    return (
        <Card  sx={{height:'80%' }} onClick={handleSelectCard}
            // variant={DetailCardStyleVariants}
            //    initial='initial'
            //    animate='animate'
        >

            <motion.div variants={ButtonYoYoVariants}
            whileHover='hover'
                        drag
            >
                <CancelPresentationIcon  sx={{m:1,fontSize:50}} onClick={handleSelectCard}/>
            </motion.div>
            <Typography   center variant="h3" component="h1">
               {card.title}
            </Typography>
            <CardMedia  sx={{border:'1px solid #333333', maxHeight:'60vh'}}
                component="img"
                alt="green iguana"
                image={card.url}
            />
            <CardContent>
                <Typography gutterBottom variant="h3" component="div" color='text.info'>
                    {card.title}
                </Typography>
                <Typography variant="h5" color="text.primary" >
                    Created by: <StrongStyled >{card.nameOfUser}</StrongStyled>
                    <br/>
                   at: <span> {card.dateCreated.substring(0,10)}</span>
                </Typography>
            </CardContent>
            <CardActions>
                <div style={{display:'flex',justifyContent:'space-between', alignItems:'center',gap:'4rem',margin:'auto'}}>
                    <Button onClick={()=>{downloadCard(card)}} size="small" color="primary">
                        Download
                    </Button>
                    <CustomDeleteIconChips isDisabled={currentUser.id!==card.createdBy} handleDeleteCard={handleDeleteChip} />
                </div>
            </CardActions>
        </Card>

    );
}
