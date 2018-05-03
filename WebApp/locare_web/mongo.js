// Util class for the mongodb client

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/test';
const LocationsCollection = "Locations";
const UsersCollection = "Users";

var state = { db: null }
var loCareDb = null;
var locations = null;
var users = null;

exports.connect = function (done) {
  if (state.db) return done()

  MongoClient.connect(url, {
    reconnectTries: 100,
    reconnectInterval: 1000
  }, function (err, db) {
    if (err) {
      return done(err)
    }

    state.db = db;
    loCareDb = db.db("LoCare");
    locations = loCareDb.collection(LocationsCollection);
    users = loCareDb.collection(UsersCollection);
    done()
  })
}

// Getter Functions from MongoDB Database
exports.getUniqueId = function () {
}

exports.getPrimaryPhoneNumber = function () {
}

exports.getLatestLocation = function () {
}

exports.getManyLocations = function () {
}

// Inserting new things into MongoDB
exports.insertNewUser = function () {

}

exports.insertNewLocation = function () {

}

// Update functions for things already in DB
exports.updateTimestamp = function () {

}

exports.updatePrimaryPhoneNumber = function () {

}

exports.get

exports.close = function (done) {
  if (state.db) {
    state.db.close(function (err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}
