const express = require('express');

const packageObj = require('../package.json');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json(packageObj);
});

module.exports = router;
