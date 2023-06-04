const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const usersModel = mongoose.Schema(
    {
        name: { type: String, require: true },
        phone: { type: Number, requie: true, unique: true },
        password: { type: String, requie: true },
        avatar: {
            type: String,
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
    { timestamps: true }
);

const Users = mongoose.model("Users", usersModel);
module.exports = Users;
