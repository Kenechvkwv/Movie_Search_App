import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import "./Movies.css";

function MoviePage() {
  const { movies, loading, error } = useContext(MovieContext);

  if (loading) return <p>Loading...please wait</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='movie-list-container'>
      <h1>Movie Clips</h1>
      {movies.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <div key={movie.id} className='movie-item'>
              <h3>{movie.name}</h3>
              {movie.site === 'YouTube' && (
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${movie.key}`}
                  title={movie.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default MoviePage;
