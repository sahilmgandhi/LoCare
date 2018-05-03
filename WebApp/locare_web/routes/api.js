var express = require('express');
var router = express.Router();
var db = require('../mongo');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Send a new location to be added to the mongodb database
router.post('/sendLoc', function (req, res, next) {
  res.send("hi");
})

// Get all locations for a user 
router.get('/getLoc', function (req, res, next) {
  res.send("hi");
})

// Insert a new user into the users database
router.post('/newUser', function (req, res, next) {
  res.send("hi");
})

// Delete all locations for a database
router.delete('/deleteLoc/:username/:uniqueid', function (req, res, next) {
  res.send("hi");
})

// Get all raw locations from the database
router.get('/rawLoc', function (req, res, next) {
  res.send("hi");
})

module.exports = router;