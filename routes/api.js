var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");
var User = require('../models/user');

var imageDataUri = require('image-data-uri');

router.post('/register', function(req, res, next){

    let newUser = new User({
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    });


    newUser.save(function(err, result){
        if (err) {
            console.error(err);
            res.send(err);
        }
        else {
            res.send('user saved!');
        }
    });

});

router.post('/login', function(req, res, next){
    console.log(req.body.email);
    User.findOne({email: req.body.email}, function(err, user){
        if (err) res.send(err);
        if (!user) res.send('no user found');
        else{
            if (req.body.password == user.password){
                res.send('logged in');
            }
            else{
                res.send("invalid user");
            }
        }
    });

});

router.get('/video', function(req, res, next){
    res.render('video');
});

router.post('/get_pic', function(req, res, next){

    imageDataUri.outputFile(req.body.uri, './public/images/test')
                    .then(res => console.log(res))

    

    res.send(req.body);
});

module.exports = router;