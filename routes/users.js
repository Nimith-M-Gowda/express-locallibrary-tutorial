var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cool',(req,res) => {
    res.send('<h3>You are so cool </h3>')
})

module.exports = router;
