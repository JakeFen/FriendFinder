const path = require("path");

const friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
      res.json(friends)
  });
  app.post("/api/friends", function(req, res) {
      var newFriend = req.body;
      var usersScore = 0;
      friends.push(newFriend);

      for (var i = 0; i < newFriend.score.length; i++) {
        usersScore += parseInt(newFriend.score);
      }
      console.log(usersScore);
  });
};
