import styled from "@emotion/styled"
import { Button, Grid, TextField } from "@mui/material"
import { useEffect, useState } from "react";

const LogIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {

        console.log('logged in')
    }

    return <div>

        <Container>
            <Grid container padding={2} alignItems="center" justifyContent="center" width="100%">
                <TextField
                    id={'username'}
                    data-cy={'username'}
                    fullWidth
                    value={username}
                    label={'Username'}
                    autoComplete="off"
                    required={true}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}

                />
            </Grid>

            <Grid container padding={2} alignItems="center" justifyContent="center" width='100%'>
                <TextField
                    id={'password'}
                    data-cy={'password'}
                    type="password"
                    fullWidth
                    value={password}
                    label={'Password'}
                    autoComplete="off"
                    required={true}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
            </Grid>

            <Button variant="outlined" onClick={login} sx={{ width: '80%' }}>Log In</Button>

        </Container>

        <Text>
            Don't have an account? Register here.
        </Text>
        <Text>
            Or continue as a guest to demo page.
        </Text>
    </div>
}

export default LogIn


const Container = styled.div`
    background-color: white;
    height: 300px;
    width: 500px;
    border-radius: 8px;
    padding: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Text = styled.div`
margin-top: 14px;
    font-size: 20px;
    color: white;
`