//jshint esversion:6
require('dotenv').config();
const express = require("express");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const mongoose = require("mongoose");




const app = express();


//db config
const db = require('./src/config/key').MongoURI;


//connect to mongoose
 mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("mongo connected"))
.catch(err => console.log(err));

//ejs 
app.use(expressLayout);
app.set('views', './src/views');
app.set('view engine', 'ejs');



//body-parser
app.use(express.urlencoded({extended: false}));
app.use(express.static("./src/public"));


app.get("/", function(req, res){
    res.render("index");
    });


    // app.use("/admin", adminRouter);
    // app.use("/user", userRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("server started on" + " " + PORT));

