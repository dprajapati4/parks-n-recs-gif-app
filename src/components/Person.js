const Person = (props) => {

  return (
    <div className="person" onClick={(event)=> props.renderQuote(event, props.name)}>
      <div className="person-image-box">
        <img className="person-image" src={props.imageUrl} alt="character">
        </img>
        </div>
        <div className="person-name">
          {props.name}
      </div>
    </div>
  );
};

export default Person;
