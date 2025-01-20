// src/components/common/Loader.js
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Styles from '../../styles/components/Loader.module.css';

function Loader({ isActive }) {
  return ReactDOM.createPortal(
    <div className={`${Styles.loaderContainer} ${!isActive ? Styles.loaderHidden : ''}`}>
      <div className={Styles.loader}>
        <svg
          className={Styles.scribbleLoader}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
        >
          <path
            className={Styles.scribblePath}
            d="M120,0
               L-20,20
               L120,40
               L-20,60
               L120,80
               L-20,100"
            strokeWidth="60"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>,
    document.body
  );
}

Loader.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Loader;
