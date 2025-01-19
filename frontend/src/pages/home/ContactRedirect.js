import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from '../../styles/pages/ContactRedirect.module.css';

function ContactRedirect({ onNavigate }) {
  const handleClick = (path) => (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <Link
      to="/contact"
      data-click-type="primary"
      className={Styles.container}
      onClick={handleClick('/contact')}
    >
      <div className={Styles.text}>REACH OUT</div>
    </Link>
  );
}

ContactRedirect.propTypes = {
  onNavigate: PropTypes.func,
};

ContactRedirect.defaultProps = {
  onNavigate: null,
};

export default ContactRedirect;
