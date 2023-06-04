const express = require("express");
const chatsController = require("../controller/chatsController");

const chatsRouter = express.Router();

// chatsRouter.get("/", userController.getAllUser);
chatsRouter.post("/createchat", chatsController.createChat);

module.exports = chatsRouter;
