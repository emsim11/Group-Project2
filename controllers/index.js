const router = require('express').Router();

const apiRoutes = require('./api');

const authRoutes = require('./authRoutes')
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);

router.use('/', homeRoutes);
router.use('/', authRoutes);

module.exports = router;