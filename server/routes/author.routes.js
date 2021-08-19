//require controller
const AuthorController = require("../controllers/author.controller");

//create routes function, inside of which are all routes
module.exports = (app) => {
  app.get("/api/authors", AuthorController.allAuthors);
};
