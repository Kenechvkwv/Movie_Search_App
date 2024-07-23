import { useContext, useState, useEffect } from "react";
import Home from "./Components/Home";
import MoviePage from "./Components/MoviePage";
import { MovieContext } from "./context/MovieContext";

const apiKey = "b5d5c542cf406e00c3a5afa8a711e711";
const url = `https://api.themoviedb.org/3/movie/157336/videos?api_key=${apiKey}`;
let mArray = [];
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        mArray = data.results;
        setMovies(mArray);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
    // console.log(fetchData())
  }, []);
  console.log(movies);
  return (
    <>
      <Home />
      <MoviePage movies={movies} />
    </>
  );
}

export default App;
