import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
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
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
