const SessionChats = require("../models/sessionChatsModel");

const createChat = async (req, res) => {
    const { idSession, user_Id, chat } = req.body;
    try {
        const chatResult = await SessionChats.findByIdAndUpdate(
            idSession,
            {
                $push: {
                    chats: {
                        user_Id,
                        chat,
                    },
                },
            },
            { new: true }
        ).populate("users_Id", "-password");
        res.status(200).send(chatResult);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

module.exports = {
    createChat,
};
