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
    <div className="mt-5 ps-5">
      {cast.length === 0 ? (
        <p>We don't have any casts for this movie</p>
      ) : (
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  width={150}
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : defaultImg
                  }
                  alt={actor.name}
                />
                <p>{actor.name}</p>
                <p className="mb-10">{actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
