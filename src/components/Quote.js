import { Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

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



const Quote = (props) => {
  const {gif, clearQuote, fetchNewQuote, person} = props;
  const {url} = gif.images.original;

  return (
    <ThemeProvider theme={theme}>
    <div className="quote">
    <div className="quote-box" >
      <img src={url} alt="gif of character" />
      </div>
      <br/>
      <Button variant="outlined" color="secondary" onClick={(event) =>{fetchNewQuote(event, person)}}> Give Me Another One </Button>
      <Button variant="outlined" color="primary" onClick={clearQuote}> Pick New Character </Button>
    </div>
    </ThemeProvider>
  );
};

export default Quote;
