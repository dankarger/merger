import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {StrongStyled} from "../../styles/Strong.styled";
import {ImageDivStyled} from "../../styles/ImageDiv.styled";


export default function ActionAreaCard({image,title,createdBy}) {
    return (
        <Card sx={{ maxWidth: 345 }}>

            <CardActionArea>

                <ImageDivStyled sx={{minHeight:'500px'}}>
                    {image}
                </ImageDivStyled>

                <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                     {title}
                    </Typography>
                    <Typography variant="p" component="p"color="text.secondary">
                       Created by <StrongStyled> {createdBy} </StrongStyled>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
