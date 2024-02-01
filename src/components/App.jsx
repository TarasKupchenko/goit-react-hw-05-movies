import React, { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import css from './App.module.css';
import Loader from './Loader/Loader';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <div>
      <header>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        |
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/movies"
        >
          Movies
        </NavLink>
      </header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
};
