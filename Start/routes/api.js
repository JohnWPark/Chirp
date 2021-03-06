var express = require('express');
var router = express.Router();

router.route('/posts')

  //returns all posts
  .get(function(req, res){

    //temp solution
    res.send({message: 'TODO return all posts'});
  })

  .post(function(req, res){
    //temp solution
    res.send({message: 'TODO Create a new post'});
  });

router.route('/posts/:id')

  //returns a particular post
  .get(function(req, res){
    //the params object will parse out with the :id and pass it as a variable id
    res.send({message: 'TODO return post with ID ' + req.params.id});
  })

  //update existing post
  .put(function(req, res){
    res.send({message: 'TODO modify post with ID' + req.params.id});
  })

  //delete existing post
  .delete(function(req, res){
    res.send({message: 'TODO delete post with ID' + req.params.id});
  });

module.exports = router;
