import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMovieCast } from 'services/Api';
import photo from '../../images/no-photo.jpeg';
import { Photo, CastList, Actor } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function getCast() {
      try {
        const fetchedCast = await fetchMovieCast(movieId);
        setCast(fetchedCast);
      } catch (error) {
        toast.error('Sorry, we could not find info about this movie');
      }
    }
    getCast();
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return cast.length > 0 ? (
    <CastList>
      {cast.map(({ name, character, profile_path, id }) => (
        <Actor key={id}>
          <Photo
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : photo
            }
            alt={name}
          />
          <p>{name}</p>
          <p>{character}</p>
        </Actor>
      ))}
    </CastList>
  ) : (
    <p>We dont have any reviews for this movie</p>
  );
};

export default Cast;
