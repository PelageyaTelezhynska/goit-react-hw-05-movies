import toast from 'react-hot-toast';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/Api';
import { MovieCard } from './MovieCard';
import { AdditionalInfo, Icon, NavItem, Wrapper } from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';
// import { AiOutlineArrowLeft } from 'react-icons/ai';

const links = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);
        const fetchedMovieDetails = await fetchMovieDetails(movieId);
        setMovie(fetchedMovieDetails);
      } catch (error) {
        toast.error('Sorry, we could not find info about this movie');
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  if (!movie) return null;

  return (
    <main>
      {isLoading && <Loader />}
      <NavItem to={backLinkHref}>
        <Icon />
        Go back
      </NavItem>
      <MovieCard movie={movie} />
      <AdditionalInfo>Additional information</AdditionalInfo>
      <Wrapper>
        {links.map(({ href, text }) => (
          <NavItem key={href} to={href}>
            {text}
          </NavItem>
        ))}
      </Wrapper>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
