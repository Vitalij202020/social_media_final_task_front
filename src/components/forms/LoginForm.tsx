import React from 'react';
import {Avatar, Button, Container, Grid, TextField, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const MyDiv = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

const MyForm = styled("form")(({ theme }) => ({
    width: "100%",
    marginTop: theme.spacing(1),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
}));

const onSubmit = () => {
    console.log("---onsubmit---")
}

const LoginForm = () => {
    return (
        <Container component="main" maxWidth="xs">
            <MyDiv>
                <StyledAvatar>
                    <LockOutlinedIcon />
                </StyledAvatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <MyForm onSubmit={onSubmit}>
                    <TextField
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required={true}
                        value="email"
                        // onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        type="text"
                    />
                    <TextField
                        variant="outlined"
                        fullWidth
                        required
                        label="Password"
                        margin="normal"
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value="password"
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" type="submit" sx={{m: "16px 0", float: "right"}}>Login</Button>
                    <Grid container>
                        <Grid item>
                            <a href="#">Don't have an account? Register</a>
                        </Grid>
                    </Grid>
                </MyForm>
            </MyDiv>
        </Container>
    );
};

export default LoginForm;