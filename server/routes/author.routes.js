//require controller
const AuthorController = require("../controllers/author.controller");

//create routes function, inside of which are all routes
module.exports = (app) => {
  //all
  app.get("/api/authors", AuthorController.allAuthors);

  //create
  app.post("/api/authors", AuthorController.create);
  //get one

  //update

  //delete
};
