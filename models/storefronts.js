const db = require('../lib/db');

function getAllStorefronts(req, res, next) {
  db.many('SELECT * FROM grojjStorefronts')
    .then((storefronts) => {
      res.storefronts = storefronts;
      next();
    })
  .catch((error) => console.log(error));
};

function addNewStorefront(req, res, next) {
  db.none('INSERT INTO grojjStorefronts (name, address, borough, zip, directions, sale_date, startTime, endTime) VALUES ($/name/, $/address/, $/borough/, $/zip/, $/directions/, $/sale_date/, $/startTime/, $/endTime/);', req.body)
    .then(() => {
      next()
  })
  .catch((error) => console.log(error));
};

module.exports = {
  getAllStorefronts,
  addNewStorefront
}
