import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ThemeToggle from '../common/ThemeToggle';
import Styles from '../../styles/components/Navbar.module.css';

function Navbar({ onNavigate }) {
  const handleClick = (path) => (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className={Styles.navbar}>
      <div className={Styles.navLinks}>
        <Link to="/" onClick={handleClick('/')}>Home</Link>
        <Link to="/projects" onClick={handleClick('/projects')}>Projects</Link>
        <Link to="/blog" onClick={handleClick('/blog')}>Blog</Link>
        <Link to="/contact" onClick={handleClick('/contact')}>Contact</Link>
      </div>
      <ThemeToggle />
    </div>
  );
}

Navbar.propTypes = {
  onNavigate: PropTypes.func,
};

Navbar.defaultProps = {
  onNavigate: null,
};

export default Navbar;
