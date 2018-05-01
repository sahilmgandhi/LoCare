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

exports.get = function () {
  return state.db
}

exports.close = function (done) {
  if (state.db) {
    state.db.close(function (err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}
