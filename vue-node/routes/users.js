var express = require('express');
var mongodb =require('mongodb')
var router = express.Router();

let mongoCt = mongodb.MongoClient;
/* GET users listing. */
router.get('/', function(req, res, next) {
  //let data ={name:'user页面'}
 // mongoCt.connect('mongodb://127.0.0.1:27017/zjm',(err,db)=>{
   // let bfo = db.collection('shop');
   // bfo.find({}).toArray((err,result)=>{
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.send(result);
   // })
  //})

});

module.exports = router;
