var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.user)
    res.render('layout', { title: 'Express', user : req.user });
  else
    res.redirect('/auth/signin');
});
router.get('/test', function(req, res, next) {
    res.json([{sami:"test"}]);
});

module.exports = router;
