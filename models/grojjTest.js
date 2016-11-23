const db = require('../lib/db');

function getAllItems(req, res, next) {
  db.many('SELECT * FROM grojjitems')
    .then((items) => {
      res.items = items;
      next();
    })
  .catch((error) => console.log(error));
};

function addNewItem(req, res, next) {
  console.log('adding');
  console.log(req.body);
  db.none('INSERT INTO grojjitems (name, price, condition, likes, url, sellerid) VALUES ($/name/, $/price/, $/condition/, $/likes/, $/url/, $/sellerid/);', req.body)
    .then(() => {
      next()
  })
.catch((error) => console.log(error));
};

module.exports = {
  getAllItems,
  addNewItem
};
