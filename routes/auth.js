var express = require('express');
var passport = require('passport');
var user = require('../models/user');

var router = express.Router();

router.get('/signin', function(req, res, next) {
  res.render('auth/signin');
});

router.get('/register', function(req, res, next) {
  res.render('auth/register');
});

router.post('/signin', passport.authenticate('local'), function(req, res){
  res.redirect('/');
});

router.post('/register', function(req, res) {
  user.register(new user({username : req.body.username}), req.body.password, function(err, user) {
    if(err) {
      console.log(err);
      res.redirect("/auth/register");
    }
    passport.authenticate('local')(req, res, function() {
      res.redirect('/');
    });
  });
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/user', function (req, res) {
   var user = req.user;
   if(user){
       res.json(user.id);
   }
   else
   res.status(401).json({status : 401, message : 'Forbidden : User cannot get messages if not in chan'});
});

router.get('/id', function (req, res) {
    var id = app.locals.socketsConnected;
    console.log(id);
    if(id){
        res.json(id);
    }
    else
        res.status(401).json({status : 401, message : 'Forbidden : User cannot get messages if not in chan'});
});


module.exports = router;
