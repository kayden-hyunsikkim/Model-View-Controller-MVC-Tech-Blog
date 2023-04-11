const router = require('express').Router();
const userRoutes = require('./userRoutes');
const techRoutes = require('./techRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/tech', techRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
