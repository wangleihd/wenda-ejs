var express = require('express');
var router = express.Router();
const db = require('../collections');
const moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.name);
  if(typeof (req.session.name) === 'undefined'){
    req.session.name = null;
  }
  console.log(req.session.name);
  db.quest.find().sort({'_id': -1}).exec(function(err, doc) {
    if(err) console.log(err);
    console.log(doc);
    res.render('index', { title: 'TodoList' , name: req.session.name , data: doc, moment: moment});
  });

});

module.exports = router;
