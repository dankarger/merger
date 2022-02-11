import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {BoxShadowStyled} from "../../styles/BoxShadow.styled";

export default function CardGallery({card,downloadCard,handleSelectCard}) {

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
                       Created By: {card.nameOfUser}
                       at : {card.dateCreated}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={()=>{downloadCard(card)}} size="small" color="primary">
                    Download
                </Button>
            </CardActions>

        </Card>
</BoxShadowStyled>
    );
}
