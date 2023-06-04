const express = require("express");
const userController = require("../controller/userController");

const userRouter = express.Router();

userRouter.get("/", userController.getAllUser);
userRouter.post("/register", userController.createUser);

module.exports = userRouter;
