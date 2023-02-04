import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
      <nav>
      <div className="allnav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="navbar-item">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="navbar-item">Recherche</Link>
          </li>
          <li className="nav-item">
            <Link to="/series" className="navbar-item">Série</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;