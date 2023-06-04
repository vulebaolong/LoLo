const express = require("express");
const userRouter = require("./userRouter");
const sessionChatsRouter = require("./sessionChatsRouter");
const chatsRouter = require("./chatsRouter");

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/sessionchats", sessionChatsRouter);
rootRouter.use("/chats", chatsRouter);

module.exports = rootRouter;
