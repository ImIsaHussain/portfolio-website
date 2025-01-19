import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from '../../styles/pages/ProjectsRedirect.module.css';
import projectImage from '../../assets/images/DSC06445.JPG';

function ProjectsRedirect({ onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (path) => (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <p className={Styles.title}>LATEST WORK</p>
        <Link
          to="/projects"
          data-click-type="primary"
          className={Styles.imgButton}
          onClick={handleClick('/projects')}
        >
          <div className={`${Styles.projectPreview} ${isVisible ? Styles.visible : ''}`}>
            <img src={projectImage} alt="Latest Project" className={Styles.previewImage} />
            <div className={Styles.previewOverlay}>
              <h5>Portfolio Website</h5>
              <p>A modern, interactive portfolio built with React</p>
            </div>
          </div>
        </Link>
      </div>
      <Link
        to="/projects"
        className={Styles.button}
        data-click-type="primary"
        onClick={handleClick('/projects')}
      >
        SEE WHAT ELSE I&apos;VE COOKED UP
      </Link>
    </div>
  );
}

ProjectsRedirect.propTypes = {
  onNavigate: PropTypes.func,
};

ProjectsRedirect.defaultProps = {
  onNavigate: null,
};

export default ProjectsRedirect;
