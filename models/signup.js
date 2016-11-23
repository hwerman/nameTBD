const db = require('../lib/db');
const bcrypt = require('bcryptjs');

const SALTROUNDS = 10;

function createUser(req, res, next) {
  console.log(req.body)
  db.none('INSERT INTO grojjUsers (username, password) VALUES ($1, $2);',
    [req.body.username, bcrypt.hashSync(req.body.password, SALTROUNDS)])
    .then(() => {
      next()
  })
  .catch((error) => console.log('Signup failed. Please try again.'));
};

module.exports = {
  createUser,
}
