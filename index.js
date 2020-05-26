const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const passport = require("passport");

//bring all routes
const auth = require("./routes/api/auth");
const questions = require("./routes/api/questions");
const profile = require("./routes/api/profile");

const app = express();
//middleware for body parser
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//mongoDB configuration
const db = require("./setup/myurl").mongoURL;

//Attempt to connect to database

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongoDB connected successfuly"))
  .catch((err) => console.log(err));

//passport middleware
app.use(passport.initialize());

//config of JWT stratergy
require("./strategies/jsonwtStrategy")(passport);

//just for testing -> route
app.get("/", (req, res) => {
  res.send("hey there big stack");
});

//actual routes
app.use("/api/auth", auth);
app.use("/api/questions", questions);
app.use("/api/profile", profile);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running at ${port}`));
