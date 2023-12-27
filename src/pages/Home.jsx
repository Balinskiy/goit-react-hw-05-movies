import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/movie-service';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setMovies(response.results);
      } catch (error) {
        console.log('error', error.message);
      }
    };
    getMovies();
  }, []);
  console.log('movies', movies);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
