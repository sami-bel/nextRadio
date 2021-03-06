var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.post('/create/:id', function(req, res, next){
    console.log('ici -create');

    var item     = req.body;
    item.author  = req.user.username;
    item.channel = req.param('id');
    var channelName = item.channel;
    console.log(channelName);


    mongoose.model('Comment').create(item, function(err, item){
        if(err){
            res.status(400).json({ status : 400, message : 'Bad request', error : err});
            return;
        }else{
            var io = req.app.get('socketio');
            io.to(req.param('id')).emit('comment', item);

            res.json(item);
        }
    });

});

router.get('/all/:id', function(req, res , next) {
    var id = req.param('id');
    console.log(id);
    mongoose.model('Comment').find({channel:id}, function(err, items) {
        res.json(items);
    });
});
module.exports = router;
