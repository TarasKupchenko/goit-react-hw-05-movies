import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovieCredits } from '../services/Api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const castData = await fetchMovieCredits(movieId);
        setCast(castData);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  return (
    <div>
      <h3>Movie Cast</h3>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : 'data:image/png;base64,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'
              }
              alt={actor.name}
              width="100"
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Cast;
