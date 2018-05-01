use LoCare;

db.createCollection("Locations", {validator: {$and: [
  {uniqueid: {$type:"string"}},
  {timestamp: {$type:"number"}},
  {location: {$type:"string"}}
]}})

db.createCollection("Users", {validator: {$and: [
        {username: {$type:"string"}},
        {uniqueid: {$type:"string"}},
        {primaryPhoneNumber: {$type:"number"}}
]}});

db.Locations.save([
  {"uniqueid": "Sahil", "timestamp": 1525212528, "location": "UCLA"},
  {"uniqueid": "Sahil", "timestamp": 1525212587, "location": "UCLA"}
])

db.Locations.createIndex({"uniqueid":1, "timestamp":1});

db.Users.save( [
    {"username": "sahilg", "uniqueid": "Sahil", "primaryPhoneNumber": 8884724675}
]);

db.User.createIndex({"username":1, "uniqueid":1});