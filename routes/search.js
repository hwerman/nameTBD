const searchRouter = require('express').Router();
const { searchByZip } = require('../models/search.js');

searchRouter.route('/zip')
  .post(searchByZip, (req, res) => res.json(res.searchResults))

module.exports = searchRouter;
