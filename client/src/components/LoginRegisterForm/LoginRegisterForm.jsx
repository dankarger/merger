import React from "react";
import {LoginFormStyled} from "../../styles/LoginForm.styled";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function LoginRegisterForm({type,handleFormInputs,handleSubmitLogin,formData,handleSubmitLoginGuest}) {

    return (

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <LoginFormStyled>

                {type==='login'? null: <TextField id="filled-basic" label="Name"
                                                  variant="filled"
                                                  onChange={handleFormInputs}
                                                  name='name'
                                                  value={type==='login'?null: formData.name}
                />}

                <TextField id="filled-basic" label="Email"
                           variant="filled"
                           onChange={handleFormInputs}
                           name='email'
                           value={formData.email}/>

                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    onChange={handleFormInputs}
                    name='password'
                    value={formData.password}
                />
                <Stack direction="column" spacing={2}>
                    {/*<Button variant="outlined">Primary</Button>*/}
                    <Button variant="contained"  color='info' onClick={()=>handleSubmitLogin()}>
                        Submit
                    </Button>
                    <Button variant="outlined" href="#outlined-buttons" onClick={()=>handleSubmitLoginGuest()}>
                       Continue as GUEST
                    </Button>
                </Stack>

        </LoginFormStyled>
            </Box>

    );
}





