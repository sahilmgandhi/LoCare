use LoCare;

db.createCollection("Locations", {validator: {$and: [
  {uniqueid: {$type:"string"}},
  {timestamp: {$type:"number"}},
  {longitude: {$type:"number"}},
  {latitude: {$type:"number"}}
]}})

db.createCollection("Users", {validator: {$and: [
        {username: {$type:"string"}},
        {uniqueid: {$type:"string"}},
        {primaryPhoneNumber: {$type:"number"}}
]}});

db.Locations.save([
  {"uniqueid": "Sahil", "timestamp": 1525212528, "longitude": 34.069633, "latitude": -118.444275},
  {"uniqueid": "Sahil", "timestamp": 1525212587, "longitude": 34.069893, "latitude": -118.44387}
])

db.Locations.createIndex({"uniqueid":1, "timestamp":1});

db.Users.save( [
    {"username": "sahilg", "uniqueid": "Sahil", "primaryPhoneNumber": 8884724675}
]);

db.Users.createIndex({"username":1, "uniqueid":1});