const db = require('../lib/db');
const jwt = require('jsonwebtoken');

function comparePassword (req, res, next) {
  db.one('SELECT * from grojjUsers WHERE grojjUsers.username = $/username/ AND grojjUsers.password = $/password/;', req.body)
    .then((data) => {
    if (!data) {
        res.status(500).send('Login Failed');
      } else {
        var myToken = jwt.sign({ username: req.body.username }, 'taco3000');
        res.status(200).json(myToken);
      }
    })
    .then(() => {
      next();
    })
};

function logOut (req, res, next) {
  res.send('logging out');
}

module.exports = {
  comparePassword,
}
