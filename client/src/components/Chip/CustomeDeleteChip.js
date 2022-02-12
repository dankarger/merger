import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import {isDisabled} from "@testing-library/user-event/dist/utils";

export default function CustomDeleteIconChips({handleDeleteCard,isDisabled}) {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <Stack direction="row" spacing={1}>

            <Chip
                label=""
                onClick={handleClick}
                onDelete={handleDelete}
                deleteIcon={<DeleteIcon />}
                variant="outlined"
                color='error'
                disabled={isDisabled}
            />
        </Stack>
    );
}
