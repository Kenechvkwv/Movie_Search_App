import React from 'react';
import "./Movies.css";

function MoviePage({ movies }) {
  return (
    <div className='movie-list-container'>
      <h1>Movie List</h1>
      {movies && movies.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <h3 key={movie.id}>{movie.name}</h3>
          ))}
        </div>
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default MoviePage;
