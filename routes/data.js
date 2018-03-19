var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';

/* GET users listing. */
router.get('/read', function(req, res, next) {
  //res.send('respond with a resource');
  var name = req.param('name') || '';
  console.log(name);
  fs.readFile(PATH + name + '.json',(err,data)=>{
    if(err) {
      return res.send({status: 0, data:{}});
    }
    //dataString = JSON.parse(data.toString());
    //return res.send(dataString);
     return res.send({status:1, data: JSON.parse(data.toString())});
  });
});

module.exports = router;
