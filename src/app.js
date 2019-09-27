const express = require('express');
const app = express();
const router = express.Router();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Rotas
const index = require('./routes/index');
app.use('/', index);
module.exports = app;
