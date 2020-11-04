//jshint esversion:6
require('dotenv').config();
const express = require("express");
const nodemailer = require('nodemailer');
const GmailUser = require('../config/key').GmailUser;
const GmailPass = require('../config/key').GmailPass;


 const userController = {

Contact(req, res) {
    const {name, email, message, subject} = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false,
        auth: {
          user: GmailUser,
          pass: GmailPass
        },
        tls: {
            rejectUnauthorized: false
        }
      });

      const mailOptions = {
        from: email,
        to: GmailUser,
        subject: subject,
        text:  email + " " + message
      };

      transporter.sendMail(mailOptions, function(error, email){
        if (error) {
          console.log(error);
        } else {
            res.redirect("/");
          console.log('Email sent: ' + email.response);
        }
      });
},


About(req, res){
   res.render("about");
},

Resume(req, res){
    res.render("resume");
 }
 };

 module.exports = userController;