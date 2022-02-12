import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {BoxShadowStyled} from "../../styles/BoxShadow.styled";
import {StrongStyled} from "../../styles/Strong.styled";
import CustomDeleteIconChips from "../Chip/CustomeDeleteChip";
import {FlexDivStyled} from "../../styles/FlexDiv.styled";
import {useContext} from "react";
import {UserContext} from "../../App";

export default function CardGallery({card,downloadCard,handleSelectCard,handleDelete}) {
    const [currentUser,setCurrentUser]= useContext(UserContext)




    return (
        <BoxShadowStyled>
        <Card sx={{ maxWidth: 345 }}>

            <CardActionArea onClick={()=>handleSelectCard(card)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={card.secure_url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Created By: <StrongStyled> {card.nameOfUser}</StrongStyled>
                      ( {card.dateCreated.substring(0,10)} )
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <div style={{display:'flex',justifyContent:'space-between',gap:'4rem'}}>
                    <Button onClick={()=>{downloadCard(card)}} size="small" color="primary">
                        Download
                    </Button>
                    <CustomDeleteIconChips isDisabled={currentUser._id!==card.createdBy}/>
                </div>

            </CardActions>

        </Card>
</BoxShadowStyled>
    );
}
