const db = require('../lib/db');

function getOneStorefront(req, res, next) {
  db.many('SELECT * FROM grojjStorefronts WHERE grojjStorefronts.currentUser = $/currentUser/;', req.body)
    .then((storefront) => {
      res.storefront = storefront;
      next();
    })
  .catch((error) => console.log(error));
}

function getAllStorefronts(req, res, next) {
  db.many('SELECT * FROM grojjStorefronts')
    .then((storefronts) => {
      res.storefronts = storefronts;
      next();
    })
  .catch((error) => console.log(error));
};

function addNewStorefront(req, res, next) {
  db.none('INSERT INTO grojjStorefronts (name, address, borough, zip, directions, sale_date, startTime, endTime, unitedState, currentUser) VALUES ($/name/, $/address/, $/borough/, $/zip/, $/directions/, $/sale_date/, $/startTime/, $/endTime/, $/unitedState/, $/currentUser/);', req.body)
    .then(() => {
      next()
  })
  .catch((error) => console.log(error));
};

module.exports = {
  getAllStorefronts,
  addNewStorefront,
  getOneStorefront,
}
