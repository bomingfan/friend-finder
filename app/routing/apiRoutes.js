// ===============================================================================


var fArray = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(fArray);
  });

  // Post request handles user input
  app.post("/api/friends", function(req, res) {

      console.log(req.body);
      fArray.push(req.body);
  });



};
