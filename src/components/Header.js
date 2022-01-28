import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header shadow">
      <span className="links">
        <b className="brand-name">Bookstore CMS</b>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : null)}>Books</NavLink>
        <NavLink to="/categories" className={({ isActive }) => (isActive ? 'active' : null)}>Categories</NavLink>
      </span>
      <NavLink to="/profile" className="profile-icon">
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
    </div>
  );
}
