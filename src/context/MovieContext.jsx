import React, { createContext, useState, useEffect } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = "b5d5c542cf406e00c3a5afa8a711e711";
    const url = `https://api.themoviedb.org/3/movie/157336/videos?api_key=${apiKey}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data  = await response.json();
                console.log(data);
                setMovies(data.results);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
        // console.log(fetchData())
    }, [url]);

    return (
        <MovieContext.Provider value={movies}>
            {children}
        </MovieContext.Provider>
    )
}

export { MovieContext, MovieProvider };