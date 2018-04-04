import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
  render(){
    console.log(this.props);
    return(
      <div>
        <MoviePoster poster2 = {this.props.poster}/>
        <h1> {this.props.title} </h1>
        <h1> hello this is a movie </h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render(){
    return(
      <img src= {this.props.poster2}/>
    )
  }
}

export default Movie;
