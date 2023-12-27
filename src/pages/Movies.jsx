import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchingMovies } from 'service/movie-service';

const Movies = () => {
  const [searchQuery, setSearcgQuery] = useSearchParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchQuery.get('searchquery');
    if (!query) return;
    const getMovies = async () => {
      try {
        const response = await getSearchingMovies(query);
        setMovies(response.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, [searchQuery]);

  const onSubmit = query => {
    setSearcgQuery({ searchquery: query });
  };
  console.log(movies);
  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
