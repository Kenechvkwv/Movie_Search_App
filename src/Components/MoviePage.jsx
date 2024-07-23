import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import "./Movies.css";

function MoviePage({movies}) {
  // let { movies, loading, error } = useContext(MovieContext);
  //  const rest = useContext(MovieContext);
console.log(movies, "whatever");
  // if (loading) return <p>Loading...please hold</p>;
  // if (error) return <p>Error: {error.message}</p>;

// movies = [
//   {
//     id: 1,
//     title: "First movie",
//   },
//   {
//     id: 2,
//     title: "Second movie",
//   },
//   {
//     id: 3,
//     title: "Third movie",
//   },
// ];

  return (
    <div className='movie-list-container'>
      <h1>Movie List</h1>
      { movies.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <h3 key={movie.id}>{movie.title}</h3>
          ))}
        </div>
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}
export default MoviePage;
