const apiRouter = require('express').Router();
const { getAllItems,
        addNewItem
      } = require('../models/items.js');
const { getAllStorefronts,
        addNewStorefront,
        getOneStorefront
      } = require('../models/storefronts.js');

apiRouter.route('/items')
  .get(getAllItems, (req, res) => res.json(res.items));

apiRouter.route('/item')
  .post(addNewItem, (req, res) => res.json({message: 'item successfully added'}));

apiRouter.route('/storefronts')
  .get(getAllStorefronts, (req, res) => res.json(res.storefronts));

apiRouter.route('/storefront')
  .post(addNewStorefront, (req, res) => res.json({message: 'storefront successfully added'}));

apiRouter.route('/myStorefront')
.post(getOneStorefront, (req, res) => res.json(res.storefront))

module.exports = apiRouter;
