const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('work/')
})

router.get('/cv', (req, res) => {
  res.render('work/cv/')
})

router.get('/contact', (req, res) => {
  res.render('work/contact/')
})

module.exports = router