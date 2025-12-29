const express = require('express');
const route = express.Router();

const validateContactData = require('../middelware/contactValidation');

const {
  verifyAdmin,
} = require('../middelware/verifyUser');

const {
  getAllMsgs,
  getMatchedMsgs,
  addNewMsg,
  removeMsg,
  getNewMsgs,
  markAsRead,
  getReadMsgs,
} = require('../controllers/contactController');

route.get('/', verifyAdmin, getAllMsgs);
route.get('/new', verifyAdmin, getNewMsgs);
route.get('/search/:search', verifyAdmin, getMatchedMsgs);
route.get('/read', verifyAdmin, getReadMsgs);
route.get('/:id', verifyAdmin, markAsRead);

route.post('/', validateContactData, addNewMsg);
route.delete('/', verifyAdmin, removeMsg);

module.exports = route;
