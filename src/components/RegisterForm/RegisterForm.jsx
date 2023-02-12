import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import validator from 'validator';
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
  sxHeroTextContent,
  sxContactSectionOne,
  sxContactText,
  sxMessageBoardContainer,
  sxLoginInput,
  sxUserNameContent,
  sxLoginHeader,
  sxRegisterFormContainer,
  sxRegisterFormContent,
  sxRegisterFormBtn,
  sxRegisterNewUserButton,

  // sxBreaksH5,
} from "../sxStyles";

function RegisterForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailStatus, setEmailStatus] = useState(true);
  const [nameStatus, setNameStatus] = useState(true);
  const [passwordStatus, setPasswordStatus] = useState(true);

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    if (emailStatus || nameStatus || passwordStatus) {
      return alert("No pressure, but we need to make this happen, give it another try!")
    }

    if (password === confirmPassword) {
      dispatch({
        type: 'REGISTER',
        payload: {
          email: email,
          name: name,
          password: password,
        }
      });
      navigate('/hub');
      window.scrollTo(0, 0);
    } else {
      alert("No pressure, but we need to make this happen, give it another try!")
    }
  }; // registerUser

  function handleCheck(type) {
    switch (type) {
      case 'email':
        console.log('email');
        validator.isEmail(email) ? setEmailStatus(false) : setEmailStatus(true);
        break;

      case 'name':
        name.length > 1 ? setNameStatus(false) : setNameStatus(true);
        break;

      case 'password':
        if (password.length > 1) {
          password === confirmPassword ? setPasswordStatus(false) : setPasswordStatus(true);
        }
        break;

      default:
        break;
    }
  }

  return (

    <form onSubmit={registerUser}>
      <Box sx={sxRegisterFormContainer}>
        <Box sx={sxRegisterFormContent}>

          {errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {errors.registrationMessage}
            </h3>
          )}

          {/* EMAIL */}
          <Box sx={sxUserNameContent}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={sxLoginHeader} variant='h6'>Email</Typography>
              {emailStatus &&
                <Typography sx={{ fontWeight: 'bold' }} color='error' variant='h5'>*</Typography>}
            </Box>
            <TextField sx={sxLoginInput}
              id="email"
              required
              // label="Email"
              value={email}
              autoComplete="off"
              onChange={(event) => setEmail(event.target.value)}
              onKeyUp={() => handleCheck('email')}
            />
          </Box>

          {/* NAME */}
          <Box sx={sxUserNameContent}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={sxLoginHeader} variant='h6'>Name</Typography>
              {nameStatus &&
                <Typography sx={{ fontWeight: 'bold' }} color='error' variant='h5'>*</Typography>}
            </Box>
            <TextField sx={sxLoginInput}
              id="name"
              required
              // label="Email"
              value={name}
              autoComplete="off"
              onChange={(event) => setName(event.target.value)}
              onKeyUp={() => handleCheck('name')}
            />
          </Box>

          {/* PASSWORD */}
          <Box sx={sxUserNameContent}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={sxLoginHeader} variant='h6'>Password</Typography>
              {passwordStatus &&
                <Typography sx={{ fontWeight: 'bold' }} color='error' variant='h5'>*</Typography>}
            </Box>
            <TextField sx={sxLoginInput}
              id="registerPassword"
              type="password"
              required
              // label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onKeyUp={() => handleCheck('password')}
            />
          </Box>

          {/* CONFIRM PASSWORD */}
          <Box sx={sxUserNameContent}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={sxLoginHeader} variant='h6'>Confirm Password</Typography>
              {passwordStatus &&
                <Typography sx={{ fontWeight: 'bold' }} color='error' variant='h5'>*</Typography>}
            </Box>
            <TextField sx={sxLoginInput}
              id="confirmPassword"
              type="password"
              required
              // label="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              onKeyUp={() => handleCheck('password')}
            />
          </Box>

          {/* REGISTER THIS TINK */}
          <Button type="submit" sx={sxRegisterNewUserButton}>
            Register & Login
          </Button>

        </Box>
      </Box>
    </form >
  );
}

export default RegisterForm;
