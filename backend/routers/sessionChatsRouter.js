const express = require("express");
const sessionChatsController = require("../controller/sessionChatsController");

const sessionChatsRouter = express.Router();

sessionChatsRouter.get("/", sessionChatsController.getAllsessionChats);
sessionChatsRouter.post("/createsession", sessionChatsController.createSessionChats);

module.exports = sessionChatsRouter;
