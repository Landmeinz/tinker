import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';


// --- Components --- //


// --- MUI --- //
import {
  Typography,
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Slider,


} from "@mui/material";

// --- Sx Styles --- //
import {
  theme,
  sxDisplayResultsContainer,
  sxColumnContainer,
  sxDisplaySection1,
  sxDoughnutContainer,
  sxGoalCelebrateContent,
  sxColumnHeader,
  sxColumnText,
  sxColumnContent,

  // sxBreaksH5,
} from "../sxStyles";

function DisplayResults() {

  const dispatch = useDispatch();
  const currentDate = useSelector((store) => store.currentDate);
  const weeklyForm = useSelector((store) => store.weeklyForm);
  console.log('weeklyform', weeklyForm);
  console.log('currentDate', currentDate);

  useEffect(() => {
    dispatch({ type: 'FETCH_WEEKLY_FORM' });
  }, [dispatch]);


  // const handleNameChange = (event, property) => {
  //     setNewMessage({
  //         ...newMessage,
  //         [property]: event.target.value,
  //     });
  // }; // handleNameChange

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     if (newMessage.name.length <= 1 || newMessage.message.length <= 3) {
  //         return window.alert("Please be more descriptive");
  //     } else {
  //         postMessage(newMessage);
  //         setNewMessage(messageTemplate);
  //     }
  // }; // handleSubmit

  // const postMessage = (newMessage) => {
  //     dispatch({ type: "POST_MESSAGE", payload: newMessage });
  //     dispatch({ type: "FETCH_MESSAGES" });
  // }; // postMessage

  // const data = {
  //   labels: [
  //     'Red',
  //     'Blue',
  //     'Yellow'
  //   ],
  //   datasets: [{
  //     label: 'My First Dataset',
  //     data: [300, 50, 100],
  //     backgroundColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(54, 162, 235)',
  //       'rgb(255, 205, 86)'
  //     ],
  //     hoverOffset: 4
  //   }]
  // };

  // const config = {
  //   type: 'doughnut',
  //   data: data,
  // };

  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  ChartJS.defaults.color = "hsla(330, 10%, 82%, 1)";

  // --- COMPLETED GOALS --- // 
  const goalsTrue = weeklyForm.filter(x => x.complete_goal === true);
  console.log('goalsTrue', goalsTrue);

  let trueNames = []
  goalsTrue.forEach(x => {
    trueNames.push(x.name);
  });
  trueNames.push("true", "trueToo", "superTrue",);
  let trueNameString = trueNames.join(', ')
  console.log('trueNameString', trueNameString);

  const goalsFalse = weeklyForm.filter(x => x.complete_goal === false);
  console.log('goalsFalse', goalsFalse);

  let falseNames = []
  goalsFalse.forEach(x => {
    falseNames.push(x.name);
  });
  falseNames.push("falsely", "false", "false");
  let falseNameString = falseNames.join(', ')
  console.log('falseNameString', falseNameString);

  const dataGoals = {
    labels: [trueNameString, falseNameString],
    datasets: [
      {
        // label: 'Completed Goals',
        data: [goalsTrue.length, goalsFalse.length],
        backgroundColor: [
          `${theme.palette.primary.main}`,
          `${theme.palette.secondary.dark}`,
        ],
        borderColor: [
          `${theme.palette.primary.main}`,
          `${theme.palette.secondary.dark}`,
        ],
        borderWidth: 1,
      },
    ],
  };

  // --- WHO'S PRESENTING  --- // 
  const presentTrue = weeklyForm.filter(x => x.present_items == true);
  console.log('presentTrue', presentTrue);

  let presentTrueNames = []
  presentTrue.forEach(x => {
    presentTrueNames.push(x.name);
  });
  let presentTrueNamesString = presentTrueNames.join(', ')
  console.log('presentTrueNamesString', presentTrueNamesString);

  const presentFalse = weeklyForm.filter(x => x.present_items == false);
  console.log('presentFalse', presentFalse);

  let presentFalseNames = []
  presentFalse.forEach(x => {
    presentFalseNames.push(x.name);
  });
  let presentFalseNamesString = presentFalseNames.join(', ')
  console.log('presentFalseNamesString', presentFalseNamesString);

  const dataPresent = {
    labels: [presentTrueNamesString, presentFalseNamesString],
    datasets: [
      {
        // label: 'Completed Goals',
        data: [presentTrueNames.length, presentFalseNames.length],
        backgroundColor: [
          `${theme.palette.primary.main}`,
          `${theme.palette.secondary.dark}`,
        ],
        borderColor: [
          `${theme.palette.primary.main}`,
          `${theme.palette.secondary.dark}`,
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Difficultly // Complexity of Goal',
      },
    },
  };

  let rating = []
  weeklyForm.forEach(x => {
    rating.push(x.difficultly);
  });

  let names = []
  weeklyForm.forEach(x => {
    names.push(x.name);
  });
  console.log('names', names);

  const data = {
    labels: names,
    datasets: [
      {
        label: '',
        data: rating,
        backgroundColor: `${theme.palette.primary.main}`,
      }
    ],
  };

  return (
    <Box sx={sxDisplayResultsContainer}>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Submission Date</Typography>
        <Box sx={sxColumnContent}>
          {weeklyForm.map((form) => (
            <Box key={form.id} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.date}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxDisplaySection1}>
        <Box sx={sxDoughnutContainer}>
          <Typography sx={{ fontWeight: "bold" }} variant="h6">{trueNames.length} People Completed Their Goal</Typography>
          <Doughnut data={dataGoals} />
          <Box sx={sxGoalCelebrateContent}>
            <Typography variant="h6">Let's Celebrate!</Typography>
            <Typography variant="body1">{trueNameString}</Typography>
          </Box>
        </Box>

        <Box sx={sxDoughnutContainer}>
          <Typography sx={{ fontWeight: "bold" }} variant="h6">{presentTrueNames.length} People Have Something To Share</Typography>
          <Doughnut data={dataPresent} />
          <Box sx={sxGoalCelebrateContent}>
            <Typography variant="h6">Let's Hear From</Typography>
            <Typography variant="body1">{presentTrueNamesString}</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Items</Typography>
        <Box sx={sxColumnContent}>
          {weeklyForm.map((form) => (
            <Box key={form.id} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.items}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Ideas</Typography>
        <Box sx={sxColumnContent}>
          {weeklyForm.map((form) => (
            <Box key={form.id} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.ideas}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Research</Typography>
        <Box sx={sxColumnContent}>
          {weeklyForm.map((form) => (
            <Box key={form.id} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.research}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Tasks Completed</Typography>
        <Box sx={sxColumnContent}>
          {weeklyForm.map((form) => (
            <Box key={form.id} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.tasks_completed}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Blockers</Typography>
        <Box sx={sxColumnContent}>
          {weeklyForm.map((form) => (
            <Box key={form.id} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.blockers}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Learned</Typography>
        <Box sx={sxColumnContent}>
          {weeklyForm.map((form) => (
            <Box key={form.id} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.learned}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Next Goal</Typography>
        <Box sx={sxColumnContent}>
          {weeklyForm.map((form) => (
            <Box key={form.id} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.next_goals}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Difficultly // Complexity</Typography>
        {/* <Bar data={dataDifficult} /> */}

        <Box sx={sxColumnContent}>
          <Bar options={options} data={data} />
        </Box>
      </Box>

    </Box>
  );
}
export default DisplayResults;
