import {
    Avatar, Button,
    Container,
    CssBaseline,
    FormControl,
    Grid, Icon,
    InputLabel,
    Select,
    TextField,
    Typography
} from '@mui/material';
import React from 'react';
import {styled} from "@mui/material/styles";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const MyDiv = styled("div")(({ theme }) => ({
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

const MyForm = styled("form")(({ theme }) => ({
    width: "100%",
    marginTop: theme.spacing(3),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0, 2),
}));

const onSubmit = () => {
    console.log("---onsubmit---")
}

const RegisterForm = () => {
    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <MyDiv>
                    <StyledAvatar color={"black"}>
                        <LockOutlinedIcon/>
                    </StyledAvatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <MyForm  onSubmit={onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={false}
                                    autoComplete="firstName"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value="firstName"
                                    // onChange={(e) => setFirstName(e.target.value)}
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value="lastName"
                                    // onChange={(e) => setLastName(e.target.value)}
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lastName"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl required variant="outlined" fullWidth>
                                    <InputLabel htmlFor="sex">Sex</InputLabel>
                                    <Select
                                        required
                                        native
                                        value="sex"
                                        // onChange={(e: any) => setSex(e.target.value)}
                                        name="sex"
                                        label="sex"
                                        inputProps={{
                                            id: "sex",
                                        }}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={1}>Male</option>
                                        <option value={2}>Female</option>
                                        <option value={3}>Other</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    name="date"
                                    id="date"
                                    label="Date"
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    value="dateOfBirth"
                                    // onChange={(e) => setDateOfBirth(e.target.value)}
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value="NickName"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    label="NickName"
                                    name="nickName"
                                    autoComplete="email"
                                    type="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value="email"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value="password"
                                    // onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="none"
                                    // error={!isPasswordMatching}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value="confirmPassword"
                                    // onChange={(e) => setConfirmPassword(e.target.value)}
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm-password"
                                    autoComplete="none"
                                    // error={!isPasswordMatching}
                                />
                            </Grid>
                        </Grid>
                        <StyledButton variant="contained" fullWidth type="submit">Submit</StyledButton>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <a href="#">Already have an account? Login</a>
                                {/*<Link to="/login">Already have an account? Sign in</Link>*/}
                            </Grid>
                        </Grid>
                    </MyForm>
                </MyDiv>
            </Container>
        </>
    );
};

export default RegisterForm;