const db = require('../lib/db');

function createUser(req, res, next) {
  console.log(req.body)
  db.none('INSERT INTO grojjUsers (username, password) VALUES ($/username/, $/password/);', req.body)
    .then(() => {
      next()
  })
  .catch((error) => console.log('Signup failed. Please try again.'));
};

module.exports = {
  createUser,
}
