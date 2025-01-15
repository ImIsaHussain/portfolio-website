import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/components/Loader.module.css';

function Loader({ isActive }) {
  return (
    <div className={`${styles.loaderOverlay} ${isActive ? styles.active : ''}`}>
      <div className={styles.loader} />
    </div>
  );
}

Loader.propTypes = {
  isActive: PropTypes.bool.isRequired
};

export default Loader;
