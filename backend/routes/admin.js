const express = require('express');
const router = express.Router();
const { verifyAdmin } = require('../middelware/verifyUser');
const { getDashboardStats } = require('../controllers/adminController');

router.get('/stats', verifyAdmin, getDashboardStats);

module.exports = router;
