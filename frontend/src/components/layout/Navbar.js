import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from '../../styles/components/Navbar.module.css';

function Navbar({ onNavigate }) {
  const handleClick = (path) => (e) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div className={Styles.navbar}>
      <Link to="/" onClick={handleClick('/')}>Home</Link>
      <Link to="/projects" onClick={handleClick('/projects')}>Projects</Link>
      <Link to="/blog" onClick={handleClick('/blog')}>Blog</Link>
      <Link to="/contact" onClick={handleClick('/contact')}>Contact</Link>
    </div>
  );
}

Navbar.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

export default Navbar;
