import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// --- MUI --- //
import {
  Typography,
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,

} from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxLoginFormContainer,
  sxLoginFormContent,
  sxLoginInput,
  sxLoginButton,
  sxLoginHeader,
  sxUserNameContent,

  // sxBreaksH5,
} from "../sxStyles";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  // const history = useHistory();


  const login = (event) => {
    event.preventDefault();
    // history.push('/home')
    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // LoginForm

  return (
    <form required onSubmit={login}>
      <Box sx={sxLoginFormContainer}>
        <Box sx={sxLoginFormContent}>
          {/* <Typography sx={{ mb: 3, textAlign: 'center', }} variant='h4'>Login</Typography> */}

          {errors.loginMessage && (
            <h3 className="alert" role="alert">
              {errors.loginMessage}
            </h3>
          )}

          <Box sx={sxUserNameContent}>
            <Typography sx={sxLoginHeader} variant='h5'>Tinker Email</Typography>
            <TextField sx={sxLoginInput}
              type="email"
              id="loginUsername"
              required
              autoComplete="new-password"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Box>

          <Box sx={sxUserNameContent}>
            <Typography sx={sxLoginHeader} variant='h5'>Password</Typography>
            <TextField sx={sxLoginInput}
              type="password"
              id="loginPassword"
              required
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Box>

        </Box>

        <Button sx={sxLoginButton} type="submit" size="large" variant="contained">Login</Button>
      </Box>

    </form>
  );
}

export default LoginForm;
