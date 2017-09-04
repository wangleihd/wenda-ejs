var express = require('express');
var router = express.Router();
const db = require('../collections');
const moment = require('moment');

/* GET home page. */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  if(typeof (req.session.name) === 'undefined'){
    req.session.name = null;
  }
  console.log(req.session.name);
  db.quest.findById(req.params.id, function(err, doc){
    if(err) console.log(err);
    res.render('infor', { title: 'TodoList' , name: req.session.name , data: doc, moment: moment} );
  })
});


router.post('/:id', function(req, res, next) {
  var time = Date.now();
  var huida = {
      content: req.body.content,
      name: req.session.name,
      time: time
    };
  console.log(huida);
  db.quest.findByIdAndUpdate(req.params.id, {$push: {huida_id: huida} }, function(err, doc) {
  if (err) console.log(err);
  console.log(doc);
  res.redirect('/q/'+req.params.id);
  });

})





module.exports = router;
