import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

import './App.css';
import Main from './components/Main';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#ffeb3b',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="Intro">
        <h1>Parks and Recreation Gif Generator</h1>
        <div className="App">
          <Main />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
