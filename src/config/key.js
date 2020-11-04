//jshint esversion:6
require('dotenv').config();

module.exports = {
 MongoURI: process.env.MONGO,
 GmailUser: process.env.GMAIL_USER,
 GmailPass:  process.env.GMAIL_PASS
};