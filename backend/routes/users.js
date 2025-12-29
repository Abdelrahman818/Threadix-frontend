const express = require('express');
const route = express.Router();

const {
  getAllUsers,
  modifyUser,
  getMatchedUsers,
  filteredUsers,
} = require('../controllers/usersController');

const { verifyAdmin } = require('../middelware/verifyUser');

route.get('/', verifyAdmin, getAllUsers);
route.get('/search/:search', verifyAdmin, getMatchedUsers);
route.get('/filter', verifyAdmin, filteredUsers);
route.patch('/:id', verifyAdmin, modifyUser);
route.patch('/profile', require('../middelware/verifyUser').authorizingUser, require('../controllers/usersController').updateProfile);

module.exports = route;
