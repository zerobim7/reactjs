import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



class App extends Component {

  state = {

  }


componentWillMount(){
  console.log('willmount');
}

componentDidMount(){
  setTimeout(() => {
    this.setState({
      movies : [
      {
        title : "movie1",
        poster : "https://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/styles/article_main_custom_user_desktop_1x/public/articles/2017/08/dogwithplant-1000.jpg?itok=s3hiogVF&timestamp=1502817275"
      },
      {
        title : "movie2",
        poster : "https://www.pets4homes.co.uk/images/articles/1144/large/buying-a-puppy-the-most-important-questions-to-ask-the-breeder-55ae636635ead.jpg"
      },
      {
        title : "movie3",
        poster : "https://www.telegraph.co.uk/content/dam/Pets/spark/pets-at-home-2017/fluffy-white-puppy-xlarge.jpg"
      },
      {
        title : "movie4",
        poster : "https://www.pets4homes.co.uk/images/articles/1144/large/buying-a-puppy-the-most-important-questions-to-ask-the-breeder-55ae636635ead.jpg"
      }
      ]
    })
  }, 5000)
}



_renderMovies = () => {
  const movies = this.state.movies.map((movie, index) => {
      return <Movie title = {movie.title} poster = {movie.poster} key = {index}/>
  });
  return movies
}

  render() {
    console.log('render');
    return (
      <div className="App">

        {this.state.movies ? this._renderMovies() : 'Loading'}


      {/*  {this.state.movies.map((movie, index) => {
          return <Movie title = {movie.title} poster = {movie.poster} key = {index}/>
        })};  */}

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
