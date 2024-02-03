import React, { useEffect, useState, useRef, lazy } from 'react';
import {
  useParams,
  NavLink,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import css from './MovieDetails.module.css';
import { fetchMovieDetails } from '../../services/Api';
import none from '../../../img/none.png';

const Reviews = lazy(() => import('../../Reviews/Reviews '));
const Cast = lazy(() => import('../../Cast/Cast'));
const Loader = lazy(() => import('../../Loader/Loader'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const goBackButtonRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await fetchMovieDetails(movieId);
      setMovieDetails(details);
    };

    fetchDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <Loader />;
  }
  const imageUrl = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    : none;
  const userScore = Math.round(movieDetails.vote_average * 10);

  return (
    <div>
      <Link className={css.goBack} to={goBackButtonRef.current}>
        Go back
      </Link>
      <div className={css.movie_details}>
        <img src={imageUrl} alt={movieDetails.title} />
        <div>
          <h2>{movieDetails.title}</h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to={`cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetails;
