const express=require('express')

const router =new express.Router()
const voter = require('../models/voterdata')



router.get("/", function (req, res) {
    res.render("index", {});
  });
  
  router.post("/getphoneno", function (req, res) {
    const findAadhar = req.body.aadharno;
    const length = req.body.aadharno.length;
    // console.log(length);
    if (length == 12) {
      voter.findOne({ aadharno: findAadhar }, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          if (data == null) {
            res.json({ phoneno: false });
          } else {
            if (data.age < 19) {
              res.json({ phoneno: "age less" });
            } else {
              gaadhar = findAadhar;
              res.json({ phoneno: data.phoneno });
            }
          }
        }
      });
    } else {
      const msg = "Length of aadhar no should be 12";
      res.json({ phoneno: false });
    }
  });


  module.exports = {
    getaadharrouter: router
  }