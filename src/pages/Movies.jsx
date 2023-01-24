import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Paginate } from 'components/Paginate/Paginate';
import { Searchbar } from 'components/SearchBar/SearchBar';
import { useState, useEffect, Suspense } from 'react';
import toast from 'react-hot-toast';
import { Outlet, useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (!movieName) return;
    async function getMovies() {
      try {
        setIsLoading(true);
        const fetchedMovies = await searchMovie(movieName, page);
        if (fetchedMovies.results.length === 0) {
          return toast.error(
            'Sorry, we did not find any movies matching your query. Try again!'
          );
        }
        setMovies(fetchedMovies.results);
        setTotalPages(fetchedMovies.total_pages);
      } catch (error) {
        toast.error('Sorry, something went wrong. Try reloading the page!');
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [movieName, page]);

  const handleSubmit = query => {
    setSearchParams({ filter: query });
    setPage(1);
    setMovies([]);
  };

  return (
    <main>
      <Searchbar onSubmit={handleSubmit} value={movieName} />
      {isLoading && <Loader />}
      {movies.length > 0 && movieName && (
        <>
          <MoviesList movies={movies} />
          <Paginate page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
