import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis'

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

//class Movie와 같은 기능을 함
function Movie({title, poster, genres, synopsis, key}){
  return(
    <div className = "Movie">
      <div className = "Movie__Columns">
        <MoviePoster poster = {poster} alt={title} />
      </div>
      <div className = "Movie__Columns">
        <h1> {title} </h1>
        <div className = "Movie__Genres">
          {genres.map((genre, index) => < MovieGenre genre={genre} key={key}/>)}
        </div>
        <div className="Movie__Synopsis">
        <LineEllipsis
          text={synopsis}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters' 
        />        
        </div>
      </div>
    </div>
  )
}



//class MoviePoster와 같은 기능을 함
function MoviePoster({poster, alt}){
  return (
    <img src={poster} title={alt} className="Movie__Poster" />
  )
}

function MovieGenre({genre}){
  return (
    <span className = "Movie__Genere">{genre} </span>
  )
}

function MovieSymopsis({synopsis}){
  return (
    <span className = "Movie__Synopsis">{synopsis}</span>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired, 
  summary: PropTypes.string.isRequired
}


MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}


export default Movie;
