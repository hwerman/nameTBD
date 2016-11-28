const db = require('../lib/db');

function editOneStorefront(req, res, next) {
  console.log(req.body)
  db.none('UPDATE grojjStorefronts SET name = $/name/, address = $/address/, borough = $/borough/, zip = $/zip/, directions = $/directions/, sale_date = $/sale_date/, starttime = $/startTime/, endtime = $/endTime/, unitedState = $/unitedState/, currentuser = $/currentUser/ WHERE grojjStorefronts.currentUser = $/currentUser/;', req.body)
    .then(() => {
      next();
    })
    .catch(error => console.log(error))
}

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
      next();
  })
  .catch((error) => console.log(error));
};

<<<<<<< HEAD
function deleteStorefront(req, res, next){
  db.none('DELETE FROM grojjStorefronts WHERE id = $1;', [req.params.id])
  .then(() => {
    next()
  })
  .catch((erorr) => console.log(error));
}
=======
function removeOneStorefront(req, res, next) {
  console.log(req.body)
  db.none('DELETE FROM grojjStorefronts WHERE grojjStorefronts.currentUser = $/currentUser/;', req.body)
    .then( () => {
      next();
    })
    .catch(error => console.log(error))
};
>>>>>>> bd3396612d626b7ef7c8ec1f40411a75f996d1db

module.exports = {
  getAllStorefronts,
  addNewStorefront,
  getOneStorefront,
  editOneStorefront,
<<<<<<< HEAD
  deleteStorefront
=======
  removeOneStorefront,
>>>>>>> bd3396612d626b7ef7c8ec1f40411a75f996d1db
}
