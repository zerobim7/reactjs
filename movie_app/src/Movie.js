import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component{

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

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

  static propTypes = {
      poster2: PropTypes.string.isRequired
  }

  render(){
    return(
      <img src= {this.props.poster2}/>
    )
  }
}

export default Movie;
