import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function CustomSwitch({label,setIsChecked,defaultValue}) {
    const [checked, setChecked] = React.useState(defaultValue);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        setIsChecked(event.target.checked)
    };

    return (
        <div>
       {label}
        <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
        </div>
    );
}
