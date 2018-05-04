var express = require('express');
var router = express.Router();
var url = require('url');
var db = require('../mongo');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/*
*  Get endpoints
*/
// Get all locations for a user 
router.get('/getLoc', function (req, res, next) {
  let uniqueid = String(req.query.uniqueid);
  let currTimestamp = new Date().getTime();
  db.getRangeLocations(uniqueid, 0, currTimestamp, (err, result) => {
    if (err) {
      handleErrors(res, req, err, "", "");
    }
    else {
      res.json(result);
    }
  });
})

// Get range of locations for a user based on two timestamps
router.get('/getRangeLoc', function (req, res, next) {
  let uniqueid = String(req.query.uniqueid);
  let startTime = Number(req.query.startTime);
  let endTime = Number(req.query.endTime);
  db.getRangeLocations(uniqueid, startTime, endTime, (err, result) => {
    if (err) {
      handleErrors(res, req, err, "", "");
    }
    else {
      res.json(result);
    }
  });
})

// Get all raw locations from the database
router.get('/rawLoc', function (req, res, next) {
  let uniqueid = String(req.query.uniqueid);
  db.getRawLocations(uniqueid, (err, result) => {
    if (err) {
      handleErrors(res, req, err, "", "");
    }
    else {
      res.json(result);
    }
  });
})

// Get the uniqueid for a user
router.get('/uniqueId', function (req, res, next) {
  let username = String(req.query.username);
  // console.log(username);
  db.getUniqueId(username, (err, result) => {
    if (err) {
      hadleErrors(res, req, err, "", "");
    }
    else {
      res.status(200);
      res.send(String(result));
    }
  });
})

/*
*  Post endpoints
*/
// Send a new location to be added to the mongodb database
router.post('/sendLoc', function (req, res, next) {
  res.send("hi");
})

// Insert a new user into the users database
router.post('/newUser', function (req, res, next) {
  res.send("hi");
})

/*
*  Delete endpoints
*/
// Delete all locations for a database
router.delete('/deleteLoc', function (req, res, next) {
  res.send("hi");
})

function handleErrors(res, req, err, statusCode, msg) {
  if (err === "") {
    res.status(statusCode);
    let error = {};
    error.status = statusCode;
    res.send({ message: msg, error: error });
  }
  else {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send({ error: error });
  }
}

function verifyReq(req) {
  let contType = req.headers[ 'content-type' ];
  if (!contType || contType.indexOf('application/json') !== 0) {
    return "Please use application/json as the content-type";
  }
  return "";
}

module.exports = router;