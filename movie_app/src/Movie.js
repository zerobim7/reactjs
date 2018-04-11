import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

/*
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
*/

//class Movie와 같은 기능을 함
function Movie({title, poster, genres, synopsis}){
  return(
    <div className = "Movie">
      <div className = "Movie__Columns">
        <MoviePoster poster = {poster}/>
      </div>
      <div className = "Movie__Columns">
        <h1> {title} </h1>
        <div className = "Movie__Genres">
          {genres.map((genre, index) => < MovieGenre genre={genre} key={index}/>)}
        </div>
        <p className="Movie__Synopsis">
          {synopsis}
        </p>
      </div>
    </div>
  )
}





/*
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
*/

//class MoviePoster와 같은 기능을 함
function MoviePoster({poster}){
  return (
    <img src={poster} alt="Movie Poster" />
  )
}

function MovieGenre({genre}){
  return (
    <span className = "Movie__Genere">{genre}</span>
  )
}

function MovieSymopsis({synopsis}){
  return (
    <span className = "Movie__Synopsis">{synopsis}</span>
  )
}

Movie.PropTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired, 
  summary: PropTypes.string.isRequired
}

/*
MoviePoster.prototype = {
  poster: Prototypes.string.isRequired
}

MovieGenere.prototype = {
  genere: Prototypes.string.isRequired
}
*/

export default Movie;
