// components/Movies.js
import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesApi } from '../services/Api';
import Loader from 'components/Loader/Loader';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('movie');

  useEffect(() => {
    const fetchMovies = async () => {
      if (query === null) return;

      try {
        setIsLoading(true);
        const data = await fetchMoviesApi(query);
        setMovies(data);
        setSearched(true);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearch = searchKeyword => {
    setSearchParams({ movie: searchKeyword });
  };

  return (
    <div>
      <h2>Movies</h2>
      <MovieSearchForm onSearch={handleSearch} />
      {isLoading && <Loader />}
      {movies.length > 0 ? (
        <MovieList movies={movies} location={location} />
      ) : (
        searched && <p>No movies found for the given keyword.</p>
      )}
    </div>
  );
};

export default Movies;
