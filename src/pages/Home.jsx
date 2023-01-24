import { useState, useEffect } from 'react';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { fetchMovies } from 'services/Api';
import { Paginate } from 'components/Paginate/Paginate';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Title = styled.h1`
display: flex,
justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 24px;
  color: #212121;
  margin-bottom: 20px;
`;

export const Home = () => {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const fetchedMovies = await fetchMovies(page);
        setMovies(fetchedMovies.results);
        setTotalPages(fetchedMovies.total_pages);
      } catch (error) {
        toast.error('Sorry, something went wrong. Try reloading the page!');
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [page]);

  if (!movies) {
    return null;
  }

  return (
    <>
      <main>
        {isLoading && <Loader />}
        <Title>Trending today</Title>
        {movies.length > 0 && <MoviesList movies={movies} />}
        <Paginate page={page} setPage={setPage} totalPages={totalPages} />
        <Outlet />
      </main>
    </>
  );
};
