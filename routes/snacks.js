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

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  db('snacks').select('*').where({id}).then((data) => {
    var snack = data[0]
    res.render(`snacks/show`, {snack})
  })
})

module.exports = router
