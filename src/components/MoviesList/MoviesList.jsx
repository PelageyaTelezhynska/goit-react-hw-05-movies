import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, NavItem } from './MoviesList.styled';
import { MovieItem } from './MovieItem';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(movie => (
          <NavItem
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <MovieItem movie={movie} />
          </NavItem>
        ))}
      </List>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
