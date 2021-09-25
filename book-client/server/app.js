const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Book = require("./models/book");
const { retryWhen } = require("rxjs");

const app = express();

mongoose.connect("mongodb+srv://lana:HBy3-itW7PrLAW-@cluster0.eql0k.mongodb.net/book-app?retryWrites=true&w=majority")
  .then(()=>{
    console.log("Connected to db");
  })
  .catch(()=>{
    console.log("Db connection error!");
  });

app.use(bodyParser.json());

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-Width, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Options",
  "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});


app.get("/books",(req, res, next)=>{
  const books = [
    {_id: 1, title:"Book 1", author:"XY", summary:"this is the first bdummy book on server", genre:"fantasy", country:"Sweden", length:"20 pages", link: "asfffdacsa.com" },
    {_id: 2, title:"Book 2", author:"XY", summary:"this is the second bdummy book on server", genre:"romance", country:"Japan", length:"24 pages", link: "asdaaacsa.com" },
    {_id: 3, title:"Book 3", author:"XY", summary:"this is the third bdummy book on server", genre:"thriller", country:"Sweden", length:"10 pages", link: "asdacsaewq.com" },
    {_id: 4, title:"Book 4", author:"XY=", summary:"this is the fourth bdummy book on server", genre:"young-adult", country:"Hungary", length:"20 pages", link: "asdassdscsa.com" },
  ];
  res.status(200).json({
    message: 'Books fetched succesfully!',
    books: books
  });
});

app.post("/books", (req, res, next)=>{
  const book = new Book({
    title: req.body.title,
    summary: req.body.summary,
    genre: req.body.genre,
    country: req.body.country,
    length: req.body.length,
    link: req.body.link
  });
  book.save();
  res.status(201).json({
    message: "post added"
  });
});

module.exports = app;
