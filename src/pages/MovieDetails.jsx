import React, { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMoviesDetails } from 'service/movie-service';
import defaultImg from 'images/movie-not-found.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const location = useLocation();

  console.log(location);
  const goBackLink = useRef(location?.state?.from ?? '/');
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await getMoviesDetails(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <div>
      <Link to={goBackLink.current}>Go Back</Link>
      <div>
        <img
          width={400}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          alt={movie.original_title || movie.name}
        />
        <div>
          <h1>{movie.original_title || movie.name}</h1>
          <p>User Score: {movie.vote_average}</p>
          <h2>Overview:</h2>
          <p>{movie.overview}</p>
          <h3>Genres:</h3>
          <ul>
            {' '}
            {movie.genres &&
              movie.genres.map(genre => {
                return (
                  <li key={genre.id}>
                    <p>{genre.name}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <ul>
        <li>
          <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
