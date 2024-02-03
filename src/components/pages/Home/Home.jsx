import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/Api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const movies = await fetchTrendingMovies();
        const filteredMovies = movies.filter(movie => movie.id && movie.title);
        setTrendingMovies(filteredMovies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setTrendingMovies([]);
      }
    };

    fetchTrending();
  }, []);

  if (trendingMovies.length === 0) {
    return <p>No trending movies available.</p>;
  }

  return (
    <div>
      <h2>Trending Movies</h2>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default Home;
