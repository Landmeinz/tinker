import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

// --- Components --- //


// --- MUI --- //
import {
  Typography,
  Box,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Slider,


} from "@mui/material";

// --- Sx Styles --- //
import {
  trans,
  sxWeeklyFormContainer,
  sxFormSectionOne,
  sxInputTextWeekly,
  sxWeeklyFormDate,
  sxWeeklySliderContent,
  sxWeeklySlider,
  sxSliderText,
  sxSliderTextContent,
  sxSubmitButton,
  sxShareItemsContainer,


  // sxBreaksH5,
} from "../sxStyles";

function WeeklyForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentDate = useSelector((store) => store.currentDate);
  const nextMeetingDay = useSelector((store) => store.nextMeetingDay);
  const nextMeetingString = `${nextMeetingDay}`;
  const index = nextMeetingString.lastIndexOf('2023');
  const monthDayString = `${nextMeetingString.slice(0, index - 1)}`;
  const nextMeetingInt = monthDayString.slice(-2);
  const nextMeetingInDays = nextMeetingInt - currentDate.day;

  let weeklyFormTemplate = {
    name: "",
    completeGoal: false,
    presentItems: false,
    items: "",
    ideas: "",
    research: "",
    tasksCompleted: "",
    blockers: "",
    learned: "",
    nextGoals: "",
    difficultly: 25,
    date: "NOW()",
  };

  const [weeklyForm, setWeeklyForm] = useState(weeklyFormTemplate);
  const [show, setShow] = useState(false);

  const handleNameChange = (event, property) => {
    setWeeklyForm({
      ...weeklyForm,
      [property]: event.target.value,
    });
  }; // handleNameChange

  const handleSubmit = (event) => {
    event.preventDefault();
    postWeeklyForm(weeklyForm);
    setWeeklyForm(weeklyFormTemplate);
    console.log('weeklyForm submit', weeklyForm);
  }; // handleSubmit

  const postWeeklyForm = (weeklyForm) => {
    dispatch({ type: "POST_WEEKLY_FORM", payload: weeklyForm });
  }; // postWeeklyForm

  function handleRadioButton(input) {
    setShow(input);
    console.log(input);
  }; // handleRadioButton

  const marks = [
    {
      value: 0,
    },
    {
      value: 100,
    },
  ];

  function handleNav(path) {
    navigate(path);
    window.scrollTo(0, 0);
  } // handleNav

  return (
    <motion.div
      initial={trans.initial}
      animate={trans.animate}
      exit={trans.exit}
      style={trans.style}
      transition={trans.time}
    >

      <Box sx={sxWeeklyFormContainer}>
        <Button 
          sx={sxSubmitButton} 
          type="button" 
          size="large"
          onClick={() => handleNav('/weekly-form/results')}
          >
          See The Results
        </Button>
      </Box>

      <Box sx={sxWeeklyFormContainer}>
        <Typography sx={sxWeeklyFormDate} variant='h4'>Next Tinker Session in {nextMeetingInDays} days: {monthDayString}, {currentDate.year}</Typography>
      </Box>


      <form className="formPanel" onSubmit={handleSubmit}>
        <Box id="sxWeeklyFormContainer" sx={sxWeeklyFormContainer}>
          {/* <Typography sx={sxWeeklyFormDate} variant='h4'>{currentDate.current_date?.split('T')[0]}</Typography> */}
          <TextField
            sx={sxInputTextWeekly}
            id="filled-static"
            label="What Should We Call You? // Name"
            required
            variant="filled"
            value={weeklyForm.name}
            onChange={(event) => handleNameChange(event, "name")}
          />

          <Box sx={sxFormSectionOne}>
            <Box>
              <FormLabel id="demo-radio-buttons-group-label">Did you complete last week's goal?</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue="no"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes, I'm the GOAT!"
                  onChange={(event) => handleNameChange(event, "completeGoal")}
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Not yet, still grinding"
                  onChange={(event) => handleNameChange(event, "completeGoal")}
                />
              </RadioGroup>
            </Box>

            <Box>
              <FormLabel id="demo-radio-buttons-group-label">Do you have specific items to share / present / or tinker with? </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  onClick={() => handleRadioButton(true)}
                  value="true"
                  control={<Radio />}
                  label="Yesser!"
                  onChange={(event) => handleNameChange(event, "presentItems")}
                />
                <FormControlLabel
                  onClick={() => handleRadioButton(false)}
                  value="false"
                  control={<Radio />}
                  label="Here for the discussion"
                  onChange={(event) => handleNameChange(event, "presentItems")}
                />
              </RadioGroup>
            </Box>
          </Box>

          {show &&
            <Box sx={sxShareItemsContainer}>
              <motion.div
                initial={trans.initial}
                animate={trans.animate}
                exit={trans.exit}
                style={trans.style}
                transition={trans.time}
              >
                <TextField
                  sx={sxInputTextWeekly}
                  id="filled-multiline-static"
                  label="Big ideas, list the items you want to share / present / or tinker with"
                  multiline
                  required
                  rows={4}
                  variant="filled"
                  value={weeklyForm.items}
                  onChange={(event) => handleNameChange(event, "items")}
                />
              </motion.div>
            </Box>
          }


          <TextField
            sx={sxInputTextWeekly}
            id="filled-multiline-static"
            label="Have any wild ideas this week?"
            multiline
            rows={4}
            variant="filled"
            value={weeklyForm.ideas}
            onChange={(event) => handleNameChange(event, "ideas")}
          />

          <TextField
            sx={sxInputTextWeekly}
            id="filled-multiline-static"
            label="Did you do any research this week? // What did you discover or uncover?"
            multiline
            rows={4}
            variant="filled"
            value={weeklyForm.research}
            onChange={(event) => handleNameChange(event, "research")}
          />

          <TextField
            sx={sxInputTextWeekly}
            id="filled-multiline-static"
            label="List any noteworthy tasks completed in the past week."
            multiline
            required
            rows={4}
            variant="filled"
            value={weeklyForm.tasksCompleted}
            onChange={(event) => handleNameChange(event, "tasksCompleted")}
          />

          <TextField
            sx={sxInputTextWeekly}
            id="filled-multiline-static"
            label="What's still puzzling you? // Any blockers in the way?"
            multiline
            rows={4}
            variant="filled"
            value={weeklyForm.blockers}
            onChange={(event) => handleNameChange(event, "blockers")}
          />

          <TextField
            sx={sxInputTextWeekly}
            id="filled-multiline-static"
            label="Most interesting thing you learned this past week."
            multiline
            rows={4}
            variant="filled"
            value={weeklyForm.learned}
            onChange={(event) => handleNameChange(event, "learned")}
          />

          <TextField
            sx={sxInputTextWeekly}
            id="filled-multiline-static"
            label="List any items or goals you're working towards for next week."
            multiline
            required
            rows={4}
            variant="filled"
            value={weeklyForm.nextGoals}
            onChange={(event) => handleNameChange(event, "nextGoals")}
          />

          <Box sx={sxWeeklySliderContent}>
            <FormLabel id="slider">Difficultly & Complexity // Rank Your Goals For Next Week</FormLabel>
            <Box>
              <Slider
                sx={sxWeeklySlider}
                aria-label="Custom marks"
                defaultValue={25}
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                value={weeklyForm.difficultly}
                onChange={(event) => handleNameChange(event, "difficultly")}
              />
              <Box sx={sxSliderTextContent}>
                <Typography sx={sxSliderText} variant='body1'>Simple</Typography>
                <Typography sx={sxSliderText} variant='body1'>Super Complex</Typography>
              </Box>
            </Box>
          </Box>

          <Button sx={sxSubmitButton} type="submit" size="large">
            Submit
          </Button>

        </Box>
      </form>
    </motion.div>
  );
}
export default WeeklyForm;
