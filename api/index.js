const express = require('express');
const router = express.Router();

const http_live = require('./video_http');


router.get("/", function(req,res ){
   res.send("메인페이지")
});

module.exports = router;

