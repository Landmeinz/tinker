import { ThemeProvider } from '@mui/material/styles';
import logo from './logo.svg';
import './App.css';

import {
  CardMedia,
  Box,

} from '@mui/material';

import {
  theme,
  sxApp,
} from './sxStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={sxApp} className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </header>

      </Box>
    </ThemeProvider>
  );
}

export default App;