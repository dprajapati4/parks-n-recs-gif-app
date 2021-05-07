const Quote = (props) => {
  const {gif, clearQuote, fetchNewQuote, person} = props;
  const {url} = gif.images.original;

  return (
    <div className="quote">
    <div className="quote-box" >
      <img src={url} alt="gif of character" />
      </div>
      <br/>
      <button onClick={(event) =>{fetchNewQuote(event, person)}}> Give Me Another One </button>
      <br/>
      <button onClick={clearQuote}> Pick New Character </button>


    </div>
  );
};

export default Quote;
