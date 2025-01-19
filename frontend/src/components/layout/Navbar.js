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
        <Link to="/" data-click-type="primary" onClick={handleClick('/')}>Home</Link>
        <Link to="/about" data-click-type="primary" onClick={handleClick('/about')}>About</Link>
        <Link to="/projects" data-hover-type="primary" onClick={handleClick('/projects')}>Projects</Link>
        <Link to="/blog" data-click-type="primary" onClick={handleClick('/blog')}>Blog</Link>
        <Link to="/contact" data-click-type="primary" onClick={handleClick('/contact')}>Contact</Link>
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
