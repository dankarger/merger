import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

 function AddPosition({positionProp,setPositionState,positionsState}) {
    const [position, setPosition] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setPosition(event.target.value);
        positionProp.current = event.target.value
        setPositionState(event.target.value)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
                Open the select
            </Button>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-controlled-open-select-label">Position</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={positionsState}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={'north'}>Top</MenuItem>
                    <MenuItem value={'center'}>Center</MenuItem>
                    <MenuItem value={'south'}>Bottom</MenuItem>
                </Select>
            </FormControl>


        </div>
    );
}
export default AddPosition