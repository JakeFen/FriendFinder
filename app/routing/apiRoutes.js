const path = require("path");

const friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var count;
    for (var i = 0; i < friends.length; i++) {
      count = 0;
      for (var j = 0; j < friends[count].scores.length; j++) {
        var friendScore = friends[count].scores[j];
        console.log(Math.abs(friendScore - parseInt(newFriend.scores)))
      }
      count++;
    }
    friends.push(newFriend);

  });
};
