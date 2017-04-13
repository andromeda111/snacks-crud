var express = require('express')
var router = express.Router()
var db = require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  db('snacks').then((snacks) => {
    console.log(snacks);
    res.render('snacks/index', {snacks})
  })
})

router.get('/new', function(req, res, next) {
  res.render('snacks/new')
})

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  db('snacks').select('*').where({id}).then((data) => {
    var snack = data[0]
    res.render(`snacks/show`, {snack})
  })
})

router.post('/', function(req, res, next) {
  const snack = {
    name: req.body['new-name'],
    img_url: req.body['img-url'],
    origin: req.body['new-origin'],
    type: req.body['new-type'],
    rating: req.body['new-rating'],
    review: req.body['new-review']
  }
  var id = req.params.id
  db('snacks').insert(snack, '*').then(() => {
    res.redirect(`/snacks`)
  })
})

module.exports = router
