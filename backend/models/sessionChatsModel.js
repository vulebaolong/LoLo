const mongoose = require("mongoose");

const sessionChatsModel = mongoose.Schema(
    {
        chats: [
            {
                _id: false,
                user_Id: { type: mongoose.Schema.Types.ObjectId },
                chat: { type: String, require: true },
            },
        ],
        users_Id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Users",
            },
        ],
    },
    { timestamps: true }
);

const SessionChats = mongoose.model("SessionChats", sessionChatsModel);
module.exports = SessionChats;
