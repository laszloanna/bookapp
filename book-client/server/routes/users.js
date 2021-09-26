const express = require("express");

const router = express.Router();
const bcrpyt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.post("/signup",(req, res, next)=>{
  bcrpyt.hash(req.body.password, 10, )
    .then(hash=>{
        const user = new User({
        username: req.body.username,
        email: req.body.email,
        password:hash
      });
      user.save()
      .then(result=>{
        res.status(201).json({
          message:"user created",
          result: result
        });
      })
      .catch(err=>{
        res.status(500).json({
          error:err
        })
      })
    })

});

router.post("/login",(req, res, next)=>{
  let fetched;
  User.findOne({ email: req.body.email})
  .then(user=>{
    if(!user){
      return res.status(401).json({
        message:"Auth failed"
      });
    }
    fetched = user;
    return bcrpyt.compare(req.body.password, user.password)
      .then(result =>{
        if(!result){
          return res.status(401).json({
            message:"Auth failed!"
          });
        }
        const token = jwt.sign({username:fetched.username, email:fetched.email, _id:fetched._id}, process.env.JWT_SECRET, { expiresIn:"1h" }
        );
        res.status(200).json({
          token:token
        });
      })
      .catch(err=>{
        return res.status(401).json({
          message:"Auth failed!"
        });
      })


  });
});

module.exports = router;
