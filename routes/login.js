const loginRouter = require('express').Router();

loginRouter.route('/')
  .post((req, res) => res.json('posted!'));

module.exports = loginRouter;
