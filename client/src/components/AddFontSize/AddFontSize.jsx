import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
import FormatSizeIcon from '@mui/icons-material/FormatSize';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function AddFontSize({fontSize,setFontSize}) {
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        setFontSize(newValue)

    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <Box sx={{ width: 250 }}>
            <Typography id="input-slider" gutterBottom>
                Font Size:
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <FormatSizeIcon />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <Input

                        value={fontSize}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
