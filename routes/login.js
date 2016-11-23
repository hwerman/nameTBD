const loginRouter = require('express').Router();
const { comparePassword } = require('../models/user.js');

loginRouter.route('/')
  .post(comparePassword, (req, res) => res.json('user succesfully logged in'));

module.exports = loginRouter;
