var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

let mongoCt = mongodb.MongoClient;
/* GET users listing. */
router.get('/', function(req, res, next) {
    //let data ={name:'user页面'}
   // console.log(req.query)
    mongoCt.connect('mongodb://127.0.0.1:27017/zjm',(err,db)=>{
       let userInfo = db.collection('user');
       userInfo.find({}).toArray((err,result)=>{
          res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
          res.setHeader('Access-Control-Allow-Credentials', true);
        result.forEach((item,index)=>{
            if(item.username==req.query.username){
               // console.log('ok');
            req.session.username = req.query.username
                res.send({err:0,mes:"scussed"})
            }
        })
   // console.log(req.query.username,req.query.userpwd)

         // res.send(result);

       })
    })

});

module.exports = router;