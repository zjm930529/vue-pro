var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

let mongoCt = mongodb.MongoClient;
/* GET users listing. */
router.get('/', function(req, res, next) {
    //let data ={name:'user页面'}
    // console.log(req.query)
    mongoCt.connect('mongodb://127.0.0.1:27017/zjm',(erre,db)=>{
        let userInfo = db.collection('user');
        userInfo.find({}).toArray((err,result)=>{
            res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
            // res.setHeader('Access-Control-Allow-Credentials', true);
            if(!err){
               result.forEach((item,index)=>{
                   if(item.username==req.query.username){
                       res.send("存在 请换一个")
                    }else {
                       userInfo.insertOne(req.query,(error,resu)=>{
                           res.send('成功')
                       })
                }

               })
            }

        });
    });

});

module.exports = router;