import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
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
  const [confirmEmail, setConfirmEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (email !== confirmEmail) {
      setIsEmailValid(false);
    }
  }, [email, confirmEmail]);

  const registerUser = (event) => {
    event.preventDefault();

    if (!isEmailValid || !isNameValid || !isPasswordValid) {
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

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    return setEmail(emailValue);
  };
  const handleConfirmEmailChange = (e) => {
    const confirmEmailValue = e.target.value;
    setConfirmEmail(confirmEmailValue);

    if (!validateEmail(confirmEmailValue)) {
      return setIsEmailValid(false)
    }
    return setIsEmailValid(email === confirmEmailValue ? true : false);
  };

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setName(nameValue)
    return setIsNameValid(nameValue.length > 2 ? true : false);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    return setPassword(passwordValue)
  };
  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    return setIsPasswordValid(password === confirmPasswordValue ? true : false);
  }

  const isDisabledListener = () => {
    return setIsDisabled(isEmailValid && isNameValid && isPasswordValid ? false : true);
  }


  return (

    <form onSubmit={registerUser} onMouseMove={isDisabledListener}>
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
              {!isEmailValid &&
                <Typography sx={{ fontWeight: 'bold' }} color='error' variant='h5'>*</Typography>}
            </Box>
            <TextField sx={sxLoginInput}
              id="email"
              required
              type='email'
              // label="Email"
              value={email}
              autoComplete="off"
              onChange={(event) => handleEmailChange(event)}
            />
          </Box>
          <Box sx={sxUserNameContent}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={sxLoginHeader} variant='h6'>Confirm Email</Typography>
              {!isEmailValid &&
                <Typography sx={{ fontWeight: 'bold' }} color='error' variant='h5'>*</Typography>}
            </Box>
            <TextField sx={sxLoginInput}
              id="confirmEmail"
              required
              type='email'
              value={confirmEmail}
              autoComplete="off"
              onChange={(event) => handleConfirmEmailChange(event)}
            />
          </Box>

          {/* NAME */}
          <Box sx={sxUserNameContent}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={sxLoginHeader} variant='h6'>Name</Typography>
              {!isNameValid &&
                <Typography sx={{ fontWeight: 'bold' }} color='error' variant='h5'>*</Typography>}
            </Box>
            <TextField sx={sxLoginInput}
              id="name"
              required
              // label="Email"
              value={name}
              autoComplete="off"
              onChange={(event) => handleNameChange(event)}
            />
          </Box>

          {/* PASSWORD */}
          <Box sx={sxUserNameContent}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={sxLoginHeader} variant='h6'>Password</Typography>
              {!isPasswordValid &&
                <Typography sx={{ fontWeight: 'bold' }} color='error' variant='h5'>*</Typography>}
            </Box>
            <TextField sx={sxLoginInput}
              id="registerPassword"
              type="password"
              required
              // label="Password"
              value={password}
              autoComplete="off"
              onChange={(event) => handlePasswordChange(event)}
            />
          </Box>

          {/* CONFIRM PASSWORD */}
          <Box sx={sxUserNameContent}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={sxLoginHeader} variant='h6'>Confirm Password</Typography>
              {!isPasswordValid &&
                <Typography sx={{ fontWeight: 'bold' }} color='error' variant='h5'>*</Typography>}
            </Box>
            <TextField sx={sxLoginInput}
              id="confirmPassword"
              type="password"
              required
              // label="Confirm Password"
              value={confirmPassword}
              
              onChange={(event) => handleConfirmPasswordChange(event)}
            />
          </Box>

          {/* REGISTER THIS TINK */}
          <Button type="submit" sx={sxRegisterNewUserButton} disabled={isDisabled}>
            Register & Login
          </Button>
        </Box>
      </Box>
    </form >
  );
}

export default RegisterForm;
