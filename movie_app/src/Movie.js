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
      </div>
    )
  }
}

function Movie({title, poster}){
  return(
    <div>
        <MoviePoster poster2 = {poster}/>
        <h1> {title} </h1>
      </div>
  )
}

class MoviePoster extends Component {

  static propTypes = {
      poster2: PropTypes.string.isRequired
  }

  render(){
    return(
      <img src= {this.props.poster2} alt="sorry data is null"/>
    )
  }
}

//위의 class MoviePoster와 같은 기능을 함
function MoviePoster({poster}){
  return (
    <img src={this.poster} alt="Movie Poster" />
  )
}

Movie.PropTypes = {
  title: PropTypes.string.isRequired,
}

export default Movie;
