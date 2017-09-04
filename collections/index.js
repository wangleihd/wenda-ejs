const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/kd';
mongoose.Promise = global.Promise;
mongoose.connect(url, {useMongoClient: true});

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
})

let Schema = mongoose.Schema;

let userShema = Schema({
  user: { type: String },
  name: { type: String },
  password: { type: String }
});
module.exports.user = mongoose.model('user', userShema);

let questSchema = Schema({
  name: { type: String },
  title: { type: String },
  content: { type: String },
  label: { type: Array, default: [] },
  depiao: { type: Number, default: 0 },
  huida: { type: Number, default: 0 },
  liulan: { type: Number, default: 0 },
  time: { type: Date, default: Date.now },
  huida_id: [
    {
      content: { type: String, default: '' },
      time: { type: Date, default: null },
      dianzan: { type: Number, default: 0 },
      name: { type: String, default: '' }
    }]
});
module.exports.quest = mongoose.model('question', questSchema);
