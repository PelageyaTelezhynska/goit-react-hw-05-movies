import PropTypes from 'prop-types';
import noPoster from '../../images/no-poster.jpg';
import {
  MovieWrapper,
  Poster,
  Title,
  VoteAverage,
  VoteCount,
  MovieInfo,
  VoteWrapper,
  About,
  AboutText,
  FlexContainer,
} from './MovieCard.styled';

export const MovieCard = ({
  movie: {
    title,
    popularity,
    poster_path,
    genres,
    original_title,
    vote_average,
    vote_count,
    overview,
  },
}) => {
  const onPoster = poster_path => {
    const poster = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : noPoster;
    return poster;
  };
  return (
    <MovieWrapper>
      <Poster src={onPoster(poster_path)} alt={title} />
      <div>
        <Title>{title}</Title>
        <FlexContainer>
          <MovieInfo>Vote / Votes</MovieInfo>
          <VoteWrapper>
            <VoteAverage>{vote_average.toFixed(1)}</VoteAverage>
            <VoteCount>/ {vote_count}</VoteCount>
          </VoteWrapper>
        </FlexContainer>
        <FlexContainer>
          <MovieInfo>Popularity</MovieInfo>
          <p>{popularity.toFixed(1)}</p>
        </FlexContainer>
        <FlexContainer>
          <MovieInfo>Original Title</MovieInfo>
          <p>{original_title}</p>
        </FlexContainer>
        <FlexContainer>
          <MovieInfo>Genre</MovieInfo>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </FlexContainer>
        <About>About</About>
        <AboutText>{overview}</AboutText>
      </div>
    </MovieWrapper>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};
