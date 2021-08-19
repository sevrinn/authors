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

// get one author

// edit author

// delelte author
