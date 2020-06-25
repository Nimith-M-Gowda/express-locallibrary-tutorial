let express = require('express')
let router = express.Router();

router.get('/',(req,res) => {
        res.send('am a non user')
})

module.exports = router ; 


