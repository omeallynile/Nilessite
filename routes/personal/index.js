const router = require('express').Router()

router.get('/', function (req, res) {
  res.render('personal/')
})

router.get('/referrals', function (req, res) {
  res.render('personal/referrals/')
})

module.exports = router