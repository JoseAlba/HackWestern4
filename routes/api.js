var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");
var User = require('../models/user');

var imageDataUri = require('image-data-uri');
var watson = require('watson-developer-cloud');
var fs = require('fs');

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

    let fileName = './public/images/test' + Date.now() + '.jpeg';

    imageDataUri.outputFile(req.body.uri, fileName)
                    .then(function(response){

                        var visual_recognition = watson.visual_recognition({
                            api_key: 'd3cd4a458a51b7be65bbd4fa36d3d5a1aac092b8',
                            version: 'v3',
                            version_date: '2016-05-20'
                        });

                        var params = {
                            images_file: fs.createReadStream(fileName),
                            classifier_ids: ["ballweapon_1353707080"]
                        };

                        visual_recognition.classify(params, function(err, r) {
                            if (err)
                                res.send(err)
                            else
                                res.send(JSON.stringify(r, null, 2));
                        })


                    });

});

module.exports = router;