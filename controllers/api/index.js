const router = require('express').Router();
const authRoutes = require('../authRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', authRoutes);
router.use('/projects', projectRoutes);

module.exports = router;