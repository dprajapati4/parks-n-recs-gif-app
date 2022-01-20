import React, {useEffect, useState} from "react";
import Person from "./Person";
import Quote from "./Quote";
import axios from 'axios';
import {characterData} from '../data/characterData.js'

let api = `${process.env.GIPHY_API_KEY}`

function Main (props) {

  const [persons, setPersons] = useState([]);
  const [showQuote, setShowQuote] = useState(false);
  const [quote, setQuote] = useState("");
  const [person, setPerson] = useState("");
  const [gif, setGif] = useState({});

  useEffect(() => {
    setPersons(characterData)
  }, [])

  function getRandomArbitrary(min, max){
    return Math.floor((Math.random() * (max - min) + min))
  }

  async function fetchGif(name){
   const randomNum = getRandomArbitrary(0, 50);
      try {
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${name}&api_key=ssybGkMQFiB9xaw8vWxQmksYZFjEbEeB&rating=pg`);
        if(res){
          const availableGifs = res.data.data;
          const  gif = availableGifs[randomNum];
          setShowQuote(true);
          setPerson(name);
          setGif(gif)
        }
      } catch (error) {

      }
  }

  async function renderQuote(event, name) {
    event.preventDefault();
     fetchGif(name);
  }

  function clearQuote(event) {
    event.preventDefault();
    setShowQuote(false);
    setPerson("");
    setQuote("");
  }
  function fetchNewQuote(event, name) {
    event.preventDefault();
    fetchGif(name);
  }

    return (

      <div>
       { showQuote === false ?
      <div className="Select">
        <h3 className="select-text">Select a Character</h3>
      </div> :
      <div className="Character Name">
        <h3> {person} GIFs </h3>
      </div>}
      <div className="container">
        {showQuote ? (
          <Quote
            gif={gif}
            clearQuote={clearQuote}
            fetchNewQuote={fetchNewQuote}
            person={person}
            quote={quote}
          />
        ) : (
          <div className="person-box">
            {persons.map((person) => (
              <Person
                name={person.name}
                key={person.name}
                imageUrl={person.imageUrl}
                quote={quote}
                renderQuote={renderQuote}
              />
            ))}
          </div>
        )}
      </div>
      </div>
    );

}

export default Main;