var express = require('express');
var router = express.Router();
const db = require('../collections');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(typeof (req.session.name) === 'undefined'){
    req.session.name = null;
  }
  if(req.session.name){
    res.render('quest', { title: 'TodoList' , name: req.session.name });
  } else {
    res.redirect('/login');
  }
});


router.post('/', function(req, res, next){
  var quest = new db.quest(req.body);
  quest.name = req.session.name;
  console.log(quest);
  quest.save();

  res.redirect('/');
})
module.exports = router;
