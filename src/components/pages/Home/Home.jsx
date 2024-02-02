import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../services/Api';

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
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
