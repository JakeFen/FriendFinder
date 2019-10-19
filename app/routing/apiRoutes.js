const path = require("path");

const friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var bestFriend;
    var minDiff = 40;
    for (var i = 0; i < friends.length; i++) {
      var friendDiff = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        var friendScore = friends[i].scores[j];
        friendDiff += Math.abs(friendScore - parseInt(newFriend.scores));
      }
      // if current friend being looped has a lower diff than minDiff change minDiff and the bestFriend
      if (friendDiff < minDiff) {
        minDiff = friendDiff;
        bestFriend = friends[i];
      }
    }

    res.json(bestFriend);
    friends.push(newFriend);
  });
};
