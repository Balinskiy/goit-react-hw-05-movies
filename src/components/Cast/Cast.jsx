import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/movie-service';
import defaultImg from 'images/movie-not-found.jpg';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const response = await getCast(movieId);
        setCast(response.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieCast();
  }, [movieId]);
  console.log(cast);
  return (
    <div>
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
