//require model
const Author = require("../models/author.model");
// all authors
module.exports.allAuthors = (req, res) => {
  Author.find()
    .then((allAuthors) => {
      console.log(allAuthors);
      res.json(allAuthors);
    })
    .catch((err) => {
      console.log("There's been a problem finding all authors", err);
      res.json(err);
    });
};
// create author
module.exports.create = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => {
      console.log(newAuthor);
      res.json(newAuthor);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};
// get one author

// edit author

// delelte author
