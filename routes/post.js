var express = require('express'),
    router = express.Router(),
    postModel = require('../models/Post');
router.get('/', function (req, res) {
    postModel.find({}, function (err, posts) {
        if (err) {
            res.status(500);
            res.json({
                status: 500,
                err
            });
        } else {

            res.json(posts);
        }
    });
});

router.post('/', function (req, res) {
    let Post = new postModel({
        post: req.body.post
    })

    Post.save(function (err,post) {
        if (err) {
            res.status(500)
            res.send({
                err
            });
        }
        res.send({
            message: "saved",
            success: true
        });
        /*
            let idUser = window.sessionStorage.NOMBRE
            let idPost = post._id;
            if(!idPost){
                
            }
            User.findById(idUser,(err,user){
                //Para retornar el objeto que has encotrado:
                res.status(200).send({post})

                user.posts.push(idPost)
            })
         */
    });
});

module.exports = router;