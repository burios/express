var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/notas', function(req, res, next) {
  res.send('burin lodetti');
});

router.get('/provas', function(req, res, next) {
  res.send('burin lodetti');
});

router.get('/exercicios', function(req, res, next) {
  res.send('burin lodetti');
});

module.exports = router;
