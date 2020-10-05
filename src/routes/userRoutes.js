const User = reqire("../models/user.js");

module.exports = function (app) {
  app.get("/", (req, res) => {
    //res.json([]);
    User.getUser((err, data) => {});
        res.status(200).json(data);
  });
};
