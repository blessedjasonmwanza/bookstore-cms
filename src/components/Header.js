import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header shadow">
      <span className="links">
        <b className="brand-name">Bookstore CMS</b>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </span>
      <Link to="/profile" className="profile-icon" />
    </div>
  );
}
