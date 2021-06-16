import { Button } from '@material-ui/core';


const Quote = (props) => {
  const {gif, clearQuote, fetchNewQuote, person} = props;
  const {url} = gif.images.original;

  return (

    <div className="quote">
    <div className="quote-box" >
      <img src={url} alt="gif of character" />
      </div>
      <br/>
      <Button variant="outlined" color="secondary" onClick={(event) =>{fetchNewQuote(event, person)}}> Give Me Another One </Button>
      <Button variant="outlined" color="primary" onClick={clearQuote}> Pick New Character </Button>
    </div>

  );
};

export default Quote;
