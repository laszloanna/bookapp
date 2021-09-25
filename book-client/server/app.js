const express = require('express');

const app = express();



app.use('/api/books',(req, res, next)=>{
  const books = [
    {id: 1, title:"Book 1", author:"XY", summary:"this is the first bdummy book on server", genre:"fantasy", country:"Sweden", length:"20 pages", link: "asfffdacsa.com" },
    {id: 2, title:"Book 2", author:"XY", summary:"this is the second bdummy book on server", genre:"romance", country:"Japan", length:"24 pages", link: "asdaaacsa.com" },
    {id: 3, title:"Book 3", author:"XY", summary:"this is the third bdummy book on server", genre:"thriller", country:"Sweden", length:"10 pages", link: "asdacsaewq.com" },
    {id: 4, title:"Book 4", author:"XY=", summary:"this is the fourth bdummy book on server", genre:"young adult", country:"Hungary", length:"20 pages", link: "asdassdscsa.com" },
  ];
  res.status(200).json({
    message: 'Books fetched succesfully!',
    books: books
  });
});

module.exports = app;
