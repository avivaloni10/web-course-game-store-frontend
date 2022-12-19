import * as React from 'react';
import {useEffect, useState} from "react";
import './ForgotPassword.css';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuth } from "../../context/AuthContext";

import { useNavigate } from 'react-router-dom'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.kids-world.org.il/wp-content/uploads/Very_Funny_Pictures_0007.jpg">
                The Aloni team
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function ForgotPassword() {
    const { resetPassword, currentUser, isUserSignedIn } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isUserSignedIn()) {
            navigate("/");
        }
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');

        try {
            await resetPassword(email);
            alert("Check your inbox for further instructions")
        } catch (e) {
            console.error(e)
            alert("Failed to reset password");
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Reset password
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Reset Password
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/signin" variant="body2">
                                        Back to login
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signin" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{mt: 5}}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}