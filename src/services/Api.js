import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a4b64e934bd6b381798223a1d6191ff5';

export const fetchMovies = async currentPage => {
  const response = await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
      page: currentPage,
    },
  });
  return response.data;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const fetchGenres = async () => {
  const response = await axios.get('/genre/movie/list', {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.genres;
};

export const searchMovie = async (query, page) => {
  const response = await axios.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};
