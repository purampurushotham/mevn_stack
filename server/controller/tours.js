var toursPackages = require("../models/tourPackages");
module.exports = {
  index(req,res){
    toursPackages.findAll().then(function (tours) {
      res.send(200).json(tours);
    }).catch(function (error) {
      res.send(500).json(error);
    })
  }

}
