var path = require("path");  
var express = require("express");  
var router = express.Router();  
  
router.get("/",function(req,res){   
    res.redirect("/upload");        // 重定向到upload
});     
  
router.get("/upload",function(req,res){  
    console.log('上传图片');
  // 执行html文件
  console.log(path.join(__dirname+"/../upload.html"));  
  res.sendFile(path.join(__dirname+"/../upload.html"));  
});  
module.exports = router;  





