//jshint esversion:6
require('dotenv').config();
const express = require("express");
const userController = require("../controller/userController");
const userRouter = express.Router();



userRouter.post("/contact", userController.userContact);
userRouter.get("/contact", userController.Contact);
userRouter.get("/about", userController.About);
userRouter.get("/resume", userController.Resume);
userRouter.get("/projects", userController.Projects);



module.exports = userRouter;