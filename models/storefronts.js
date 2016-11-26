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
  console.log(req.body)
  db.none('INSERT INTO grojjStorefronts (name, address, borough, zip, directions, sale_date, startTime, endTime, unitedState, currentUser) VALUES ($/name/, $/address/, $/borough/, $/zip/, $/directions/, $/sale_date/, $/startTime/, $/endTime/, $/unitedState/, $/currentUser/);', req.body)
    .then(() => {
      next()
  })
  .catch((error) => console.log(error));
};

module.exports = {
  getAllStorefronts,
  addNewStorefront
}
