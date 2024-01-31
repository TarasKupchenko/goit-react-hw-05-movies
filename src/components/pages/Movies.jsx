import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesApi } from '../services/Api';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);
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
        const data = await fetchMoviesApi(searchKeyword);
        setMovies(data);
        setSearched(true);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchClicked && searchKeyword) {
      fetchMovies();
      setSearchClicked(false);
    }
  }, [searchKeyword, searchClicked, query]);

  const handleInputChange = event => {
    setSearchKeyword(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    const searchValue = event.target.searchInput.value;
    setSearchParams({ movie: searchValue });
    setSearchClicked(true);
  };

  return (
    <div>
      <h2>Movies</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies by title..."
          name="searchInput"
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {searched && movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink state={{ from: location }} to={`/movies/${movie.id}`}>
                <h3>{movie.title}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        searched && <p>No movies found for the given keyword.</p>
      )}
    </div>
  );
};

export default Movies;
