const testRouter = require('express').Router();
const { getAllItems, 
        addNewItem
      } = require('../models/grojjTest.js')

testRouter.route('/')
  .get(getAllItems, (req, res) => res.json(res.items))
  .post(addNewItem, (req, res) => res.json({message: 'item successfully added'}));

module.exports = testRouter;
