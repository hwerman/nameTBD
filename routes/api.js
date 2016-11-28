const apiRouter = require('express').Router();
const { getAllItems,
        addNewItem
      } = require('../models/items.js');
const { getAllStorefronts,
        addNewStorefront,
        getOneStorefront,
        editOneStorefront,
<<<<<<< HEAD
        deleteStorefront,
=======
        deleteStorefront
>>>>>>> master
      } = require('../models/storefronts.js');

apiRouter.route('/items')
  .get(getAllItems, (req, res) => res.json(res.items));

apiRouter.route('/item')
  .post(addNewItem, (req, res) => res.json({message: 'item successfully added'}));

apiRouter.route('/storefronts')
  .get(getAllStorefronts, (req, res) => res.json(res.storefronts))
  .put(editOneStorefront, (req, res) => res.json({message: 'storefront successfully edited'}));

apiRouter.route('/storefront')
  .post(addNewStorefront, (req, res) => res.json({message: 'storefront successfully added'}));

apiRouter.route('/myStorefront')
  .post(getOneStorefront, (req, res) => res.json(res.storefront));

<<<<<<< HEAD
apiRouter.route('/storefronts/:id')
  .delete(deleteStorefront, (req, res) => res.json({message: 'storefront successfully deleted'}));
=======
apiRouter.route('storefronts/:id')
  .delete(deleteStorefront, (req, res) => res.json({message: 'storefront successfully deleted'}))
>>>>>>> master

module.exports = apiRouter;
