import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'service/movie-service';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const response = await getReviews(movieId);
        setReview(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieReviews();
  }, [movieId]);
  console.log(review);
  return (
    <div>
      {review.length === 0 ? (
        <p>We don't have ane reviews for this movie</p>
      ) : (
        <ul>
          {review.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
