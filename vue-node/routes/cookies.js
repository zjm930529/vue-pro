var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Credentials',true);//带凭证
   // console.log(req.query)
 req.session.name='zjm'
  res.send({status:'种完了',username:{a:'库数据'}});
});

module.exports = router;
