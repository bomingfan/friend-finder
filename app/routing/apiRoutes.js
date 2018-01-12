// ===============================================================================


var fArray = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests

  app.get("/api/friends", function (req, res) {
    res.json(fArray);
  });

  // Post request handles user input
  app.post("/api/friends", function (req, res) {
    fArray.push(req.body);
    
    var sumArray = [];
    for (j = 0; j < fArray.length - 1; j++) {
      var sum = 0;
      for (i = 0; i < req.body.scores.length; i++) {
        sum += Math.abs(req.body.scores[i] - fArray[j].scores[i]);
      }
      sumArray.push(sum);
    }
    index = sumArray.indexOf(Math.min(...sumArray));
    res.json(fArray[index]);

  });

};
