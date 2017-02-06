var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.post('/create', function(req, res, next){
    console.log('ici -create');

    var item = req.body;

    item.author = req.user.username;


    mongoose.model('Comment').create(item, function(err, item){
        if(err){
            res.status(400).json({ status : 400, message : 'Bad request', error : err});
            return;
        }else{
            var io = req.app.get('socketio');
            io.emit('comment', item);
            res.json(item);
        }
    });

});

module.exports = router;
