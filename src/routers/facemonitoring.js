var ba64 = require("ba64");
const fs = require("fs-extra");
const path = require('path')


const express=require('express')
const router =new express.Router()




var dirname;
router.get("/monitoring", function (req, res) {
    
    console.log(gaadhar)
    dirname='./facepy/aadhaar_data/' + gaadhar
    dirname = path.join(__dirname,dirname)
    console.log(dirname)
    //dirname =__dirname+"./facepy/aadhaar_data/" + gaadhar;
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname);
    }
    //fs.removeSync('/tmp/myFolder');
    var cookie_otp = req.cookies["show"];
    if (cookie_otp == null || cookie_otp == "") {
      res.redirect("/");
    } else {
      res.render("monitoring");
    }
  });
  
  var i = 0;
  router.post("/getimage", function (req, res) {
    i++;
    var imgstr = req.body.sentimg;
    res.json({ code: "200" });
    ba64.writeImageSync(dirname + "/" + i, imgstr);
    if (i >= 30) {
      i = 0;
      setTimeout(() => {
        const cp = require("child_process").execFile;
        console.log(gaadhar);
        //var PythonFilePath = path.join(__dirname,'./facepy/face.py')
        const ch = cp('./facepy/face.py', [gaadhar], (error, stdout, stderr) => {
          if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
          } else {
            console.log(stdout.toString());
          }
        });
      }, 10000);
    }
  });

module.exports = router