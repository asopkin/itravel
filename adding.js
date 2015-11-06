//Function for adding in users
users.adduser = function(db) {
  return function(req, res) {

    //get user id from facebook api
    var user = fb_user_id;

    var ObjectID = require('mongodb').ObjectID;

    // Submit to the DB
    collection.insert({
      "user" : user_id,

    }, function (err, data) {
      if (err) {
        res.send("There was a problem adding the information to the database.");
      }
      else {
        res.location("index");
        res.redirect("/");
      }
    });

  }
}

//Function for adding in trips.
trips.addtrip = function(db) {
  return function(req, res) {

    var user_id = fb_user_id;

    // Get our form values from attributes
    var start = req.info.start,
        end = req.info.end,
        origin = req.info.origin,
        dest = req.info.dest;
    var ObjectID = require('mongodb').ObjectID;

    // Submit to the DB
    collection.insert({
      "trip_start": start,
      "trip_end": end,
      "trip_origin": origin,
      "trip_dest": dest;

    }, function (err, data) {
      if (err) {
        res.send("There was a problem adding the information to the database.");
      }
      else {
        res.location("index");
        res.redirect("/");
      }
    });

  }
}