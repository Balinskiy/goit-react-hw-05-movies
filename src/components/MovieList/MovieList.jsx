import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className="ps-5">
        {movies.map(movie => {
          return (
            <li key={movie.id} className="text-blue-700 hover:text-red-700">
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <h3>{movie.title || movie.name}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
