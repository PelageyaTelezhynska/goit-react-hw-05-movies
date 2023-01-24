import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMovieReviews } from 'services/Api';
import { Author, Content, ReviewItem, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function getReviews() {
      try {
        const fetchedReviews = await fetchMovieReviews(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        toast.error('Sorry, we could not find info about this movie');
      }
    }
    getReviews();
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <ReviewsList>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => (
          <ReviewItem key={id}>
            <Author>{author}</Author>
            <Content>{content}</Content>
          </ReviewItem>
        ))
      ) : (
        <p>We dont have any reviews for this movie</p>
      )}
    </ReviewsList>
  );
};

export default Reviews;
