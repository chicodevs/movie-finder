import SearchBar from '../SearchBar/SearchBar';
import MovieCard from '../MovieCard/MovieCard';
import React from 'react';
import './styles.css';



function MovieContainer () {
  const [movieName, setMovieName] = React.useState("");
  const [movieList, setMovieList] = React.useState([]);
  const [movieClicked, setMovieClicked] = React.useState(undefined);
  function handleSubmit(movie) {
    if (!movie) return;
    setMovieName(movie);
    getMovie(movie)
  }
  async function getMovie(movieTitle) {
    try {
      setMovieClicked(undefined)
      const res = await fetch('https://api.themoviedb.org/3/search/movie?api_key=0b425d9598bbdec758cd0722e080a0b4&query='+movieTitle).then((response) => response.json())
      setMovieList(res.results)
    } catch (error) {
      console.log(error)
    }
  }
  async function findSimilarMovies(movie) {
    try {
      setMovieClicked(movie)
      setMovieName("")
      const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/recommendations?api_key=0b425d9598bbdec758cd0722e080a0b4&language=en-US&page=1`).then((response) => response.json())
      setMovieList(res.results)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} movieName={movieName}/>
      <h1 className="movie-clicked-title">{movieClicked ? `Movies like ${movieClicked.title}` : ''}</h1>
      <div className="movie-info">
        {movieList.map(movie => (
          <MovieCard movie={movie} key={movie.id} clickedMovie={findSimilarMovies}/>
        ))}
      </div>
    </div>
  )
}

export default MovieContainer;