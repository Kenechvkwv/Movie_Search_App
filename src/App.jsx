import { useState, useEffect } from "react";
import Home from "./Components/Home";
import MoviePage from "./Components/MoviePage";

const apiKey = "b5d5c542cf406e00c3a5afa8a711e711";
const url = `https://api.themoviedb.org/3/movie/157336/videos?api_key=${apiKey}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...please wait</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Home />
      <MoviePage movies={movies} />
    </>
  );
}

export default App;
