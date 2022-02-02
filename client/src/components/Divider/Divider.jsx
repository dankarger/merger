import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {Link} from "react-router-dom";
import {LinkStyled} from "../../styles/Link.styled";


const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',

};

export default function ListDividers() {
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
             <Link to={'/work'} >

                <ListItem button >

                    <ListItemText primary="WorkPlace"  />

                </ListItem>

            </Link>

            <Divider />
            <ListItem button divider>
                <ListItemText primary="Login" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Sign-Up" />
            </ListItem>
            <Divider light />
            <Link to={'/gallery'} >
            <ListItem button>
                <button>butt</button>
                <ListItemText primary="Gallery" />
            </ListItem>
            </Link>
        </List>
    );
}
