import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';

const Quote = (props) => {
  const {gif, clearQuote, fetchNewQuote, person} = props;
  return (
    <div className="quote">
      {gif.images ?
    <div className="quote-box" >
        <img src={gif.images.original.url} alt="gif of character" />
      </div> : <h1>Loading</h1>}
      <br/>
      <Button variant="outlined" color="secondary" onClick={(event) =>{fetchNewQuote(event, person)}}> Give Me Another One </Button>
      <Button variant="outlined" color="primary" onClick={clearQuote}> Pick New Character </Button>
    </div>
  );
};

export default Quote;
