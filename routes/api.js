const apiRouter = require('express').Router();
const { getAllItems,
        addNewItem
      } = require('../models/items.js');
const { getAllStorefronts } = require('../models/storefronts.js');

apiRouter.route('/items')
  .get(getAllItems, (req, res) => res.json(res.items));

apiRouter.route('/item')
  .post(addNewItem, (req, res) => res.json({message: 'item successfully added'}));

apiRouter.route('/storefronts')
  .get(getAllStorefronts, (req, res) => res.json(res.storefronts));

module.exports = apiRouter;
