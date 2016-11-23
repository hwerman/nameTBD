const userRouter = require('express').Router();
const { createUser } = require('../models/signup.js');
const { comparePassword } = require('../models/user.js');

userRouter.route('/signup')
  .post(createUser, (req, res) => res.json('user successfully created'));

userRouter.route('/login')
  .post(comparePassword, (req, res) => res.json('user succesfully logged in'));

userRouter.route('/logout')
  .delete((req, res) => res.json({message: 'user succesfully logged out'}));

module.exports = userRouter;
