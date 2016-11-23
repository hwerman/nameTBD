'use strict'
require('dotenv').config({ silent: true });
const bodyParser  = require('body-parser');
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const jwt         = require('jsonwebtoken');
const expressJWT  = require('express-jwt');
const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(expressJWT({secret: 'taco3000'}).unless({path: ['/login', '/']}));

const testRouter = require('./routes/grojjTest.js');
const loginRouter = require('./routes/login.js');
app.use('/', testRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {console.log('Listening')});
