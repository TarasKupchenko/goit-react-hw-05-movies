import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews '));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies/" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />}>
              <Route index element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
