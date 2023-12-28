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
      <Link
        to={goBackLink.current}
        className="bg-red-100 px-5 hover:bg-red-400 hover:text-white ms-5"
      >
        Go Back
      </Link>
      <div className="mt-5 ps-5 flex flex-row">
        <img
          className=""
          width={200}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          alt={movie.original_title || movie.name}
        />
        <div>
          <h1 className="font-bold text-3xl my-5 ps-5">
            {movie.original_title || movie.name}
          </h1>
          <p className="text-1xl my-5 ps-5">User Score: {movie.vote_average}</p>
          <h2 className="font-bold text-2xl mt-5 ps-5">Overview:</h2>
          <p className="ps-5">{movie.overview}</p>
          <h3 className="font-bold text-1xl mt-5 ps-5">Genres:</h3>
          <ul className="flex flex-row gap-10 ps-5">
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
      <h3 className="font-bold text-1xl mt-5 ps-5">Additional Information:</h3>
      <ul className="list-disc">
        <li className="text-blue-700">
          <Link
            to={`/movies/${movie.id}/cast`}
            className="mt-5 ps-5 hover:text-red-700"
          >
            * Cast
          </Link>
        </li>
        <li className="text-blue-700">
          <Link
            to={`/movies/${movie.id}/reviews`}
            className="mt-5 ps-5 hover:text-red-700"
          >
            * Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
