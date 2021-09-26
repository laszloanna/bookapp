const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Book = require("./models/book");
const { retryWhen } = require("rxjs");

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
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});


app.get("/books",(req, res, next)=>{
  Book.find()
    .then((documents)=>{
      res.status(200).json({
        message: 'Books fetched succesfully!',
        books: documents
      });
    });
});

app.get("/books/:_id",(req, res, next)=>{
 Book.findById(req.params._id)
 .then((document)=>{
   res.status(200).json(document);
 });
})

app.post("/books", (req, res, next)=>{
  const book = new Book({
    title: req.body.title,
    summary: req.body.summary,
    genre: req.body.genre,
    country: req.body.country,
    length: req.body.length,
    link: req.body.link
  });
  book.save().then((createdBook)=>{
    res.status(201).json({
      message: "post added",
      bookId: createdBook._id
    });
  });
});

app.delete("/books/:_id",(req, res, next)=>{
  Book.deleteOne({_id: req.params._id})
    .then((result)=>{
      console.log(result);
      res.status(200).json({
        message:"Book deleted."
      });
    });
});

module.exports = app;
