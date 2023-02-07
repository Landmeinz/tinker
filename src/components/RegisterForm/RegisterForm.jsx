import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  sxHeroTextContent,
  sxContactSectionOne,
  sxContactText,
  sxMessageBoardContainer,
  sxLoginInput,
  sxUserNameContent,
  sxLoginHeader,
  sxRegisterFormContainer,
  sxRegisterFormContent,


  // sxBreaksH5,
} from "../sxStyles";

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [bio, setBio] = useState('');
  const [pic, setPic] = useState('');
  const [location, setLocation] = useState('')
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [familySize, setFamilySize] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  // const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      dispatch({
        type: 'REGISTER',
        payload: {
          username: username,
          email: email,
          password: password,
          bio: bio,
          pic: pic,
          location: location,
          birthday: birthday,
          gender: gender,
          maritalStatus: maritalStatus,
          familySize: familySize,
          isAdmin: isAdmin,
        },
      });
      alert("Friendly reminder to REMEMBER YOUR PASSWORD! Warning: Password Recovery is not currently available")
      // history.push('/home')
    } else {
      alert("Error: Email or Passwords Don't Match")
    }


  }; // registerUser


  // INPUT text styles
  const sxInput = {
    mb: 1,
  }

  // FORM CONTAINER holds all the page content
  const sxFormContainer = {
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
  }

  // FORM CONTENT holds the "register new user" title and all of the input boxes
  const sxFormContent = {
    // border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    mx: 'auto',
    width: '100%',
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
            <Typography sx={sxLoginHeader} variant='h5'>Email</Typography>
            <TextField sx={sxLoginInput}
              id="email"
              required
              value={username}
              autocomplete="off"
              onChange={(event) => setUsername(event.target.value)}
            />
          </Box>


          {/* FIRST NAME */}
          <Box sx={sxUserNameContent}>
            <Typography sx={sxLoginHeader} variant='h5'>First Name</Typography>
            <TextField sx={sxLoginInput}
            id="firstName"
            required
            value={email}
            autocomplete="off"
            onChange={(event) => setEmail(event.target.value)}
          // placeholder="Username"
          />
          </Box>
 

          {/* BIO */}
          <TextField sx={sxLoginInput}
            id="bio"
            label="Bio"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
          />

          {/* PIC URL */}
          <TextField sx={sxLoginInput}
            id="pic"
            label="Profile Image URL"
            value={pic}
            onChange={(event) => setPic(event.target.value)}
          />

          {/* LOCATION */}
          <TextField sx={sxLoginInput}
            id="location"
            label="Location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />

          {/* BIRTHDAY */}
          <TextField ssx={sxLoginInput}
            type="date"
            id="birthday"
            label="Birthday"
            value={birthday}
            onChange={(event) => setBirthday(event.target.value)}
            InputLabelProps={{ shrink: true }}
          />

          {/* GENDER SELECTION */}
          <FormControl>
            <InputLabel id="gender">Gender</InputLabel>
            <Select sx={sxInput} variant="outlined"
              labelId="gender"
              id="gender"
              name="gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <MenuItem value={'Female'}>Female</MenuItem>
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
              <MenuItem value={'Prefer not to answer'}>Prefer not to answer</MenuItem>
            </Select>
          </FormControl>

          {/* FAMILY SIZE */}
          <TextField sx={sxInput}
            type="number"
            id="familySize"
            label="Family size"
            value={familySize}
            onChange={(event) => setFamilySize(event.target.value)}
          />

          {/* RELATIONSHIP SELECTION */}
          <FormControl>
            <InputLabel id="">Marital Status</InputLabel>
            <Select sx={sxInput} variant="outlined"
              labelId="maritalStatusId"
              label="maritalStatus"
              id="maritalStatus"
              name="Marital status"
              value={maritalStatus}
              onChange={(event) => setMaritalStatus(event.target.value)}
            >
              <MenuItem value={'Single'}>Single</MenuItem>
              <MenuItem value={'Married'}>Married</MenuItem>
              <MenuItem value={'Partnership'}>Partnership</MenuItem>
              <MenuItem hidden value={'Prefer not to answer'}>Prefer not to answer</MenuItem>
            </Select>
          </FormControl>

          {/* PASSWORD */}
          <TextField sx={sxInput}
            id="registerPassword"
            type="password"
            required
            label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {/* CONFIRM PASSWORD */}
          <TextField sx={sxInput}
            id="confirmPassword"
            type="password"
            required
            label="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          {/* LET'S START COOKING */}
          <Button type="submit" size="large" variant="contained" color="primary">Register & Login</Button>

        </Box>
      </Box>
    </form>
  );
}

export default RegisterForm;
