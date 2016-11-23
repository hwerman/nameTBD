const signupRouter = require('express').Router();
const { createUser } = require('../models/signup.js');

signupRouter.route('/')
  .post(createUser, (req, res) => res.json('user successfully created'));

module.exports = signupRouter;
