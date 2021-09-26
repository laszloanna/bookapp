const express = require("express");


const Book = require("../models/book");
//const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.get("",(req, res, next)=>{
  Book.find()
    .then((documents)=>{
      res.status(200).json({
        message: 'Books fetched succesfully!',
        books: documents
      });
    });
});

router.get("/:_id",(req, res, next)=>{
 Book.findById(req.params._id)
 .then((document)=>{
   res.status(200).json(document);
 });
})

router.post("",  (req, res, next)=>{
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
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

router.delete("/:_id", (req, res, next)=>{
  Book.deleteOne({_id: req.params._id})
    .then((result)=>{
      console.log(result);
      res.status(200).json({
        message:"Book deleted."
      });
    });
});

module.exports = router;
