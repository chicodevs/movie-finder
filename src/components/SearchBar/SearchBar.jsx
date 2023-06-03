import React from 'react';
import './styles.css';

// eslint-disable-next-line react/prop-types
function SearchBar ({onSubmit, movieName}) {
  const [movie, setMovie] = React.useState(movieName || "");

  React.useEffect(() => {
    setMovie(movieName)
  },[movieName]);

  const handleChange = (movie) => {
    setMovie(movie);
  };

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(movie)
  }

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Search Movie"
          value={movie}
          onChange={(e) => handleChange(e.target.value)}
          autoFocus
        />
        <button type='submit'>Search</button>
      </form>
    </section>
  );
}

export default SearchBar;