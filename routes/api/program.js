var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


router.get('/all/:id', function(req, res , next) {
    var id = req.param('id');
    console.log(id);
    mongoose.model('Program').find({channel:id}, function(err, items) {
        res.json(items);
    });
});

router.post('/create/:id', function (req,res, next) {
    var item     = req.body;
    item.channel = req.param('id');
    mongoose.model('Program').create(item,function (err,item) {
        if(err){
            res.status(400).json({ status : 400, message : 'Bad request', error : err});
            return;
        }else{
            res.json('ok');
        }
    })

});

router.post('/update/:id', function (req,res, next) {
    var item = req.body;
    var id = req.param('id');
    console.log(item);
    console.log(id);
    mongoose.model('Channel').update({ _id: id },{ $set: { name: item.name, url:item.url}},function (err,item) {
        if(err){
            res.status(400).json({ status : 400, message : 'Bad request', error : err});
            return;
        }else{

            res.json('ok');
        }
    })

});

module.exports = router;
