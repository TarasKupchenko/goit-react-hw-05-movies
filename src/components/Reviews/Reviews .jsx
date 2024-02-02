import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'components/services/Api';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const reviewsData = await fetchReviews(movieId);
        setReviews(reviewsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviewsData();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
