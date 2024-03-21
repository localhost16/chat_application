import { Container, Paper, Typography, TextField, Button, Stack, Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import {CameraAlt as CameraIcon} from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useInputValidation} from "6pp"
import { usernamevalidators } from '../utils/validators';

const Login = () => {

    const [isLogin, setisLogin] = useState(true);

    const togglelogin=()=>setisLogin((prev)=>!prev)

    const name=useInputValidation("");
    const bio=useInputValidation("");
    const username=useInputValidation("",usernamevalidators);
    const password=useInputValidation("");


    

    return (
        <Container component={"main"} maxWidth="xs"
        
        sx={{
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Paper
                elevation={3}

                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                {isLogin ?
                    <>
                        <Typography variant='h5'>Login</Typography>
                        <form style={{
                            width:"100%",
                            marginTop:"1rem"
                        }}>
                            <TextField
                                id=""
                                label="username"

                                required
                                fullWidth
                                variant='outlined'

                               sx={{
                                marginTop:"1rem"
                               }}
                               value={username.value}
                               onChange={username.changeHandler}
                               
                            />
                            <TextField
                                id=""
                                label="Password"
                                type='password'

                                required
                                fullWidth
                                variant='outlined'

                                sx={{
                                    marginTop:"1rem"
                                   }}

                                value={password.value}
                                onChange={password.changeHandler}

                            />

                            <Button sx={{

                                marginTop:"1rem"
                               

                            }} fullWidth variant='contained' color='primary' type='submit'

                              
                            >
                                Login
                            </Button>

                            <Typography
                            
                            sx={{
                               textAlign:"center",
                               marginTop:"1rem"
                            }}

                            >OR</Typography>

                            <Button sx={{
                             
                             
                            }} fullWidth variant='' color='secondary' type='submit'

                                onClick={() => togglelogin()}

                            >
                                Resister
                            </Button>

                        </form>

                    </>

                    :  <>
                    <Typography variant='h5'>Sign Up</Typography>
                    <form style={{
                        width:"100%",
                        marginTop:"1rem"
                    }}>

                    <Stack
                    position={'relative'}
                    width={'10rem'}
                    margin={'auto'}
                    >
                        <Avatar 
                        
                        sx={{
                            width:"10rem",
                            height:"10rem",
                            objectFit:"contain"
                        }} 
                        />
                        <IconButton
                        
                        sx={{
                            position:"absolute",
                            bottom:"0",
                            right:"0",
                            color:"white",
                            bgcolor:"rgba(0,0,0,0.5)",
                            ":hover":{
                                bgcolor:"rgba(0,0,0,0.7)"
                            }
                        }}

                        component="label"
                        
                        >
                            <>
                        
                            <CameraIcon/>
                            <VisuallyHiddenInput type='file'/>
                            
                            </>
                          
                        </IconButton>

                    </Stack>

                        <TextField
                            id=""
                            label="name"

                            required
                            fullWidth
                            variant='outlined'

                           sx={{
                            marginTop:"1rem"
                           }}
                           value={name.value}
                           onChange={name.changeHandler}
                           
                           
                        />
                        <TextField
                            id=""
                            label="username"

                            required
                            fullWidth
                            variant='outlined'

                           sx={{
                            marginTop:"1rem"
                           }}
                           value={username.value}
                           onChange={username.changeHandler}
                           
                        />

                        {
                            username.error && (
                                <Typography color="error" variant='caption' >
                                    {username.error}
                                </Typography>

                            )
                        }
                        <TextField
                            id=""
                            label="bio"

                            required
                            fullWidth
                            variant='outlined'

                           sx={{
                            marginTop:"1rem"
                           }}
                           value={bio.value}
                           onChange={bio.changeHandler}
                           
                        />
                        <TextField
                            id=""
                            label="Password"
                            type='password'

                            required
                            fullWidth
                            variant='outlined'

                            sx={{
                                marginTop:"1rem"
                               }}
                               value={password.value}
                               onChange={password.changeHandler}

                        />

                        <Button sx={{

                            marginTop:"1rem"
                           
                        }} fullWidth variant='contained' color='primary' type='submit'

                        
                        >
                            Sign Up
                        </Button>
                        <Typography
                        
                        sx={{
                           textAlign:"center",
                           marginTop:"1rem"
                        }}

                        >OR</Typography>

                        <Button sx={{

                        }} fullWidth variant='' color='secondary' type='submit'

                            onClick={() => togglelogin()}

                        >
                            Login
                        </Button>

                    </form>


                </>}

            </Paper>

        </Container>
    )
}

export default Login