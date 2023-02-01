import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-item">Accueil</Link>
      <Link to="/series" className="navbar-item">Séries</Link>
      <Link to="/recherche" className="navbar-item">Recherche</Link>
    </nav>
  );
};

export default Navbar;