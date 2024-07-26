import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import "./Movies.css";

function MoviePage() {
  const { movies, loading, error } = useContext(MovieContext);

  if (loading) return <p>Loading...please wait</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="movie-list-container">
      <h1>Movie Clips</h1>
      <div className='movie-page-body'>
        {" "}
        {movies.length > 0 ? (
          <div className="movie-row">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-item">
                <h3 className="movie-title">{movie.name}</h3>
                {movie.site === "YouTube" && (
                  <iframe
                    width="360"
                    height="215"
                    src={`https://www.youtube.com/embed/${movie.key}`}
                    title={movie.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                <p>{movie.published_at}</p>
                <p>{movie.type }</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

export default MoviePage;
