//import React, { lazy, Suspense } from 'react';
//import { Routes, Route, NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Movies from './pages/Movies';
import css from './App.module.css';

//export const Home = lazy(() => import('./Home/Home'));
//const Movies = lazy(() => import('./components/Movies'));
//const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
//const Cast = lazy(() => import('./components/Cast'));
//const Reviews = lazy(() => import('./components/Reviews'));

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
      <Routes>
        {/*<Suspense fallback={<div>Loading...</div>}>*/}
        <Route path="/" element={<Home />} />
        <Route path="/movies/" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />} />

        {/*</Suspense>*/}
      </Routes>
    </div>
  );
};
