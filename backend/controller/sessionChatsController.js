const SessionChats = require("../models/sessionChatsModel");

const createSessionChats = async (req, res) => {
    const { chats, users_Id } = req.body;
    try {
        const sessionChat = await SessionChats.create({
            chats,
            users_Id,
        });
        res.status(200).send(sessionChat);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

const getAllsessionChats = async (req, res) => {
    try {
        const sessionChat = await SessionChats.find().populate("users_Id", "-password");
        res.status(200).send(sessionChat);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

module.exports = {
    createSessionChats,
    getAllsessionChats,
};
