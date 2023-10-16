import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

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
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const history = useHistory();

  useEffect(() => {
    checkLoginStatus();
  }, [dispatch]);

  function checkLoginStatus() {
    console.log('--- checkLoginStatus');
    console.log('--- session storage useEffect App.js:', sessionStorage.getItem('isLoggedIn'));

    if (sessionStorage.getItem('isLoggedIn') == 'true') {
      console.log('--- storage user true');
      dispatch({ type: 'FETCH_USER' });
    }
    else {
      console.log('--- storage user false');
      dispatch({ type: 'LOGOUT' })
    }

    console.log('--- checkLoginStatus END ---');
    console.log('--- session storage checkLoginStatus:', sessionStorage.getItem('isLoggedIn'));
  }


  const login = async (event) => {
    event.preventDefault();
    console.log('--- hit login button ---');

    if (!username || !password) {
      return dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }

    dispatch({
      type: 'LOGIN',
      payload: {
        username: username,
        password: password,
      }
    })

    // hack; need this so nav doesnt fire first //
    // await wait(1000);

    setUsername('');
    setPassword('');

    await wait(500);
    navigate('/loading');
    navigate('/hub');
    window.scrollTo(0, 0);

  }; // LoginForm

  const wait = (ms) => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  };

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
              id="loginEmail"
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
