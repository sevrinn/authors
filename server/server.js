//import express and other libraries
const express = require("express");
const app = express();
const port = 8000;

//add in cors

//configure express app server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//configure cors to talk directly to back end

//configure mongoose to connect
require("./config/mongoose.config");
//add routes to listen
const authorRoutes = require("./routes/author.routes");
authorRoutes(app);
// start the app server listening
app.listen(port, () => console.log(`Listening on port ${8000}`));
