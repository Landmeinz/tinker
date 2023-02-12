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
import zIndex from "@mui/material/styles/zIndex";

function DisplayResults() {

  const dispatch = useDispatch();
  const currentDate = useSelector((store) => store.currentDate);
  const weeklyForms = useSelector((store) => store.weeklyForms);
  console.log('weeklyForms', weeklyForms);
  console.log('currentDate', currentDate);

  useEffect(() => {
    dispatch({ type: 'FETCH_WEEKLY_FORMS' });
  }, [dispatch]);

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
  const goalsTrue = weeklyForms.filter(x => x.complete_goal === true);

  let trueNames = []
  goalsTrue.forEach(x => {
    trueNames.push(x.name);
  });
  let trueNameString = trueNames.join(', ')

  const goalsFalse = weeklyForms.filter(x => x.complete_goal === false);

  let falseNames = []
  goalsFalse.forEach(x => {
    falseNames.push(x.name);
  });
  let falseNameString = falseNames.join(', ')

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
  const presentTrue = weeklyForms.filter(x => x.present_items == true);

  let presentTrueNames = []
  presentTrue.forEach(x => {
    presentTrueNames.push(x.name);
  });
  let presentTrueNamesString = presentTrueNames.join(', ')

  const presentFalse = weeklyForms.filter(x => x.present_items == false);

  let presentFalseNames = []
  presentFalse.forEach(x => {
    presentFalseNames.push(x.name);
  });
  let presentFalseNamesString = presentFalseNames.join(', ')

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
        text: 'Difficultly // Complexity of Next Goal',
      },
    },
  };

  let rating = []
  weeklyForms.forEach(x => {
    rating.push(x.difficultly);
  });

  let names = []
  weeklyForms.forEach(x => {
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

  let dateList = [];
  weeklyForms.forEach(x => {
    dateList.push(x.date);
  });
  // console.log('dateList', dateList);
  let dateStringList = [];
  dateList.forEach(x => {
    dateStringList.push(`${x}`);
  })
  console.log('dateStringList', dateStringList);

  

  const filteredItemList = weeklyForms.filter(x => x.items != '');
  const filteredIdeasList = weeklyForms.filter(x => x.ideas != '');
  const filteredResearchList = weeklyForms.filter(x => x.research != '');
  const filteredTasksList = weeklyForms.filter(x => x.tasks_completed != '');
  const filteredBlockersList =  weeklyForms.filter(x => x.blockers != '');
  const filteredLearnedList =  weeklyForms.filter(x => x.learned != '');
  const filteredNextGoalsList =  weeklyForms.filter(x => x.next_goals != '');

  return (
    <Box sx={sxDisplayResultsContainer}>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Submission Date</Typography>
        <Box sx={sxColumnContent}>
          {weeklyForms.map((form, i) => (
            <Box key={i} sx={sxColumnText}>
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
          {filteredItemList.map((form, i) => (
            <Box key={i} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.items}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Ideas</Typography>
        <Box sx={sxColumnContent}>
          {filteredIdeasList.map((form, i) => (
            <Box key={i} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.ideas}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Research</Typography>
        <Box sx={sxColumnContent}>
          {filteredResearchList.map((form, i) => (
            <Box key={i} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.research}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Tasks Completed</Typography>
        <Box sx={sxColumnContent}>
          {filteredTasksList.map((form, i) => (
            <Box key={i} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.tasks_completed}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Blockers</Typography>
        <Box sx={sxColumnContent}>
          {filteredBlockersList.map((form, i) => (
            <Box key={i} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.blockers}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Learned</Typography>
        <Box sx={sxColumnContent}>
          {filteredLearnedList.map((form, i) => (
            <Box key={i} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.learned}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Next Goal</Typography>
        <Box sx={sxColumnContent}>
          {filteredNextGoalsList.map((form, i) => (
            <Box key={i} sx={sxColumnText}>
              <Typography color="primary.light" variant="body1">{form.name}:</Typography>
              <Typography variant="body1">{form.next_goals}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={sxColumnContainer}>
        <Typography sx={sxColumnHeader} variant="h5">Difficultly // Complexity</Typography>
        <Box sx={sxColumnContent}>
          <Bar options={options} data={data} />
        </Box>
      </Box>

    </Box>
  );
}
export default DisplayResults;
