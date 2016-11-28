const db = require('../lib/db');

function searchByZip(req, res, next) {
  console.log(req.body)
  db.many('SELECT * FROM grojjStorefronts WHERE grojjStorefronts.zip = $/searchZip/;', req.body)
  .then((searchResults) => {
    res.searchResults = searchResults;
    next();
  })
    .catch(error => console.log(error))
}

module.exports = {
  searchByZip
}
