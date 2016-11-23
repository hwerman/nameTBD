const db = require('../lib/db');

function comparePassword (req, res, next) {
  db.one('SELECT * from grojjUsers WHERE grojjUsers.username = $/username/ AND grojjUsers.password = $/password/;', req.body)
    .then((data) => {      
    if (!data) {
        res.status(500).send('Login Failed');
      } else {
        res.status(200).json({message: 'Login Successful'});
      }
    })
    .then(() => {
      next();
    })
}

module.exports = {
  comparePassword,
}
