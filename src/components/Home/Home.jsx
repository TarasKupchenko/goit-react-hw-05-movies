import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../services/Api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies);
    };

    fetchTrending();
  }, []);
  return (
    <div>
      <h2>Trending Movies</h2>
      {trendingMovies.map(movie => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
