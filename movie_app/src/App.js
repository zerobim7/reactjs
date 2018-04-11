import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



class App extends Component {
  
  // Render : componentWillMount() -> render() -> componentDidMount()
  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component

  state = {

  }


  componentWillMount(){
    console.log('willmount');
  }

  componentDidMount(){

    this._getMovies();

    {/*setTimeout(() => {
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
    }, 5000)*/}


  }



  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie 
      title = {movie.title_english} 
      poster = {movie.medium_cover_image} 
      key = {movie.id} 
      genres = {movie.genres}
      synopsis = {movie.synopsis}
      />
    })
    return movies
  }


  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies : movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(potato =>  potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }


  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
      {/*{this.state.movies ? this._renderMovies() : 'Loading'}*/}
      {movies ? this._renderMovies() : 'Loading'}

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
