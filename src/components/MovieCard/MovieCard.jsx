import './styles.css';
/* eslint-disable react/prop-types */

function MovieCard ({movie, clickedMovie}) {
  return(
    <div className="card" onClick={() => clickedMovie(movie)}>
      <div className="title-container">
        <p>{movie.title}</p>
      </div>
      <img src={`https://image.tmdb.org/t/p/w200/`+movie.poster_path} alt="Sorry! Image not available at this time"  />
    </div>
  )
}

export default MovieCard;