import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

export default function CardDetail({card,handleSelectCard}) {

    return (
        <Card sx={{ maxHeight:'80vh' }}>
            <CancelPresentationIcon sx={{m:1}} onClick={handleSelectCard}/>
            <Typography sx={{textAlign:'center'}}center variant="h3" component="h1">
               {card.title}
            </Typography>
            <CardMedia  sx={{border:'1px solid #333333'}}
                component="img"
                alt="green iguana"

                image={card.url}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
