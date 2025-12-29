const express = require('express');
const route = express.Router();

const { verifyAdmin } = require('../middelware/verifyUser');
const validateCategroy = require('../middelware/categoryValidation');
const upload = require('../middelware/imageSaver');

const {
  getAllCategories,
  addNewCategory,
  modifyCategory,
  removeCategory,
} = require('../controllers/categoryController.js');

route.get('/', getAllCategories);
route.post('/', verifyAdmin, validateCategroy, upload.single('image'), addNewCategory);
route.patch('/:id', verifyAdmin, upload.single('image'), modifyCategory);
route.delete('/:id', verifyAdmin, removeCategory);

module.exports = route;
