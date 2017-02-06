var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


router.get('/all', function(req, res , next) {
    mongoose.model('Channel').find({}, function(err, items) {
        res.json(items);
    });
});

router.post('/create', function (req,res, next) {

    mongoose.model('Channel').create({name:'seconde Channel'},function (err,item) {
        if(err){
            res.status(400).json({ status : 400, message : 'Bad request', error : err});
            return;
        }else{

            res.json('ok');
        }
    })

})

module.exports = router;
