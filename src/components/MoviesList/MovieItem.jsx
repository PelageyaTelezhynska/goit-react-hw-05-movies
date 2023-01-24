import PropTypes from 'prop-types';
import noPoster from '../../images/no-poster.jpg';
import { Poster } from './MovieItem.styled';

export const MovieItem = ({ movie: { title, poster_path } }) => {
  const onPoster = poster_path => {
    const poster = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : noPoster;
    return poster;
  };
  return (
    <>
      <Poster src={onPoster(poster_path)} alt={title} />
      <h2>{title}</h2>
    </>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};
