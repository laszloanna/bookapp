const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const { retryWhen } = require("rxjs");

const booksRoutes = require("./routes/books");
const usersRoutes = require("./routes/users");

const app = express();

mongoose.connect("mongodb+srv://lana:" + process.env.MONGO_PWD +"@cluster0.eql0k.mongodb.net/book-app?retryWrites=true&w=majority")
  .then(()=>{
    console.log("Connected to db");
  })
  .catch(()=>{
    console.log("Db connection error!");
  });

app.use(bodyParser.json());

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use("/books", booksRoutes);
app.use("/users", usersRoutes);

module.exports = app;
