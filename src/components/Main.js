import React from "react";
import Person from "./Person";
import Quote from "./Quote";
import axios from 'axios';

const fakeData = [
  {
    name: "Leslie Knope",
    imageUrl:
      "https://mediaproxy.salon.com/width/1200/height/1200/https://media.salon.com/2012/11/knope_campaign_rect.jpg",
  },
  {
    name: "Ben Wyatt",
    imageUrl:
      "https://www.tvovermind.com/wp-content/uploads/2017/05/Ben-rdl3u6.png",
  },
  {
    name: "Ron Swanson",
    imageUrl:
      "https://imgix.bustle.com/uploads/image/2018/6/8/26b3ffa1-7cde-4b82-86be-fef9bca62ae5-ron.png?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
  },
  {
    name: "Tom Haverford",
    imageUrl:
      "https://i.pinimg.com/originals/96/41/b4/9641b4ea836503e8f7f25d646eed7148.png",
  },
  {
    name: "Donna Meagle",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0a/Donna_Meagle.jpg",
  },
  {
    name: "Ann Perkins",
    imageUrl:
      "https://64.media.tumblr.com/a395c10bbf8b8131e4ee854bc825db43/3409862a12c84c97-88/s640x960/804d180cdfb16382c4ff8416b54455f99037aae6.jpg",
  },
  {
    name: "April Luggate",
    imageUrl:
      "https://home.adelphi.edu/~kb21429/april-owl.png",
  },
  {
    name: "Andy Dwyer",
    imageUrl:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/Chris-Pratt-as-Andy-Dwyer-in-Parks-and-Recreation.jpg",
  },
  {
    name: "Chris Traeger",
    imageUrl:
      "https://i.imgflip.com/pqsm8.jpg",
  },
];

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      showQuote: false,
      quote: "",
      person: "",
      gif:{}
    };
    this.renderQuote = this.renderQuote.bind(this);
    this.clearQuote = this.clearQuote.bind(this);
    this.fetchNewQuote = this.fetchNewQuote.bind(this);
  }
  componentDidMount() {
    // call your endpoint and get the data
    this.setState({ persons: fakeData });
  }

  getRandomArbitrary(min, max) {
    return Math.floor((Math.random() * (max - min) + min));
  }

 async fetchGif(name){
   const randomNum = this.getRandomArbitrary(0, 50);
      try {
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${name}&api_key=ssybGkMQFiB9xaw8vWxQmksYZFjEbEeB&rating=pg`);
        if(res){
          const availableGifs = res.data.data;
          const  gif = availableGifs[randomNum];
          this.setState({
            showQuote: true,
            person: name,
            gif
          });
        }
      } catch (error) {

      }
  }

  async renderQuote(event, name) {
    event.preventDefault();
     this.fetchGif(name);
  }

  clearQuote(event) {
    event.preventDefault();
    this.setState({ showQuote: false, person: "", quote: "" });
  }
  fetchNewQuote(event, name) {
    event.preventDefault();
    this.fetchGif(name);
  }

  render() {
    console.log(this.state.person)
    return (
      <div>
       { this.state.showQuote === false ?
      <div className="Select">
        <h3 className="select-text">Select a Character</h3>
      </div> :
      <div className="Character Name">
        <h3> {this.state.person} GIFs </h3>
      </div>}
      <div className="container">
        {this.state.showQuote ? (
          <Quote
            quote={this.state.quote}
            gif={this.state.gif}
            person={this.state.person}
            clearQuote={this.clearQuote}
            fetchNewQuote={this.fetchNewQuote}
          />
        ) : (
          <div className="person-box">
            {this.state.persons.map((person) => (
              <Person
                name={person.name}
                key={person.name}
                imageUrl={person.imageUrl}
                quote={this.state.quote}
                renderQuote={this.renderQuote}
              />
            ))}
          </div>
        )}
      </div>
      </div>
    );
  }
}
