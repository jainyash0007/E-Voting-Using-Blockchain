require("dotenv").config();

require('./db/mongoose')
const {getaadharrouter} = require('./routers/getaadhaar')

const faceMonitorRouter = require('./routers/facemonitoring')
const path = require('path')
const express = require("express");
 // T1 change
const bodyParser = require("body-parser");
const ejs = require("ejs");
var cookieParser = require("cookie-parser");
const SendOtp = require("sendotp");
const sendOtp = new SendOtp("348306AI4bHrstiLn5fc52d7aP1");
var NodeWebcam = require("node-webcam");



const app = express()





const publicDirectoryPath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')


app.set("view engine", "ejs");

app.set("views",viewspath)

app.set("Cache-Control", "public,max-age=0");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);


app.use(cookieParser());
app.use(express.static(publicDirectoryPath));
global.gaadhaar
app.use(getaadharrouter)
app.use(faceMonitorRouter)




app.listen(process.env.PORT || 3000, function () {
  console.log("Started server on port: 3000");
});
