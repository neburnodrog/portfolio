import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const navbar: React.FC = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
