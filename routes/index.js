const express = require('express');

const packageObj = require('../package.json');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json(packageObj);
});

router.post('/user/herotalents', function (req, res) {
  console.log(req.body);

  res.json({
    success: true
  })
});

module.exports = router;
