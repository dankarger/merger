import React, {useEffect, useRef} from "react";
import {LoginFormStyled} from "../../styles/LoginForm.styled";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {fadeIn} from "../../animations/animations";
import {motion} from 'framer-motion'
import { FormControl } from '@mui/material';

export default function LoginRegisterForm({type,handleFormInputs,handleSubmitLogin,formData,handleSubmitLoginGuest}) {

    useEffect(()=>{

    },[formData])

    return (
        <FormControl>
            <Box
                as={motion.div}
                variants={fadeIn}
                initial='initial'
                animate='animate'
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <form action="">
            <LoginFormStyled>
                {type==='login'? null: <TextField id="filled-basic-name" label="Name"
                                                  variant="filled"
                                                  onChange={handleFormInputs}
                                                  name='name'
                                                  value={formData.name}
                                                  autoComplete="current-name"
                                                  autoFocus={type!=='login'}
                                                  required={true}
                />}


                <TextField id="filled-basic-email" label="Email"
                           type="email"
                           variant="filled"
                           onChange={handleFormInputs}
                           name='email'
                           value={formData.email}
                           // autoComplete="current-email"
                           autoFocus={type==='login' }
                           required={true}

                />

                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    onChange={handleFormInputs}
                    name='password'
                    value={formData.password}
                    required={true}
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
            </form>
            </Box>
        </FormControl>
    );
}





