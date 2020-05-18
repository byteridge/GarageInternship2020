var express = require('express');
var router = express.Router();
var User = require('./user-model')
/* GET users listing. */
router.get('/', function (req, res, next) {

  User.find({}, function (error, response) {
    if (!error) {
      res.send(response);
    }
  })
});

router.post('/', function (req, res, next) {
  let user = new User(req.body);

  user.save(function (error, response) {
    if (!error) {
      res.send("user saved successfully");
    }
  })
})

router.put('/', function (req, res, next) {

  User.findOneAndUpdate({ email: req.query.id }, req.body, function (error, response) {
    if (!error) {
      res.send("user updated successfully");
    }
  })
})

module.exports = router;
