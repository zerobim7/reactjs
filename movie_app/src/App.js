import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = ["movie1", "movie2", "movie3"];
const movieImages = ["https://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/styles/article_main_custom_user_desktop_1x/public/articles/2017/08/dogwithplant-1000.jpg?itok=s3hiogVF&timestamp=1502817275",
"https://www.pets4homes.co.uk/images/articles/1144/large/buying-a-puppy-the-most-important-questions-to-ask-the-breeder-55ae636635ead.jpg",
"https://www.telegraph.co.uk/content/dam/Pets/spark/pets-at-home-2017/fluffy-white-puppy-xlarge.jpg"];

class App extends Component {
  render() {
    return (
      <div className="App">

        <Movie title={movies[0]} poster={movieImages[0]}/>
        <Movie title={movies[1]} poster={movieImages[1]}/>
        <Movie title={movies[2]} poster={movieImages[2]}/>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React modify</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
      </div>
    );
  }
}

export default App;
