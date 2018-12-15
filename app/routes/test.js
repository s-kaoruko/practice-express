var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = {
    text: 'success!'
  }
  res.send(data)
})

module.exports = router
