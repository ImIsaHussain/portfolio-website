const express = require('express');
const router = express.Router();

// Import route modules
const projectRoutes = require('./projects');
const blogRoutes = require('./blog');
const contactRoutes = require('./contact');

// Mount routes
router.use('/projects', projectRoutes);
router.use('/blog', blogRoutes);
router.use('/contact', contactRoutes);

module.exports = router;
