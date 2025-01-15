import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Styles from '../../styles/components/Navbar.module.css';

function Navbar() {
  return (
    <div className={Styles.navbar}>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
  );
}

export default Navbar;
