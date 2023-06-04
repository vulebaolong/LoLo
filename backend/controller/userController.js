const Users = require("../models/usersModel");

const getAllUser = async (req, res) => {
    try {
        const user = await Users.find();
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

const createUser = async (req, res) => {
    const { name, phone, password, avatar } = req.body;
    try {
        const user = await Users.create({ name, phone, password, avatar });
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

module.exports = {
    getAllUser,
    createUser,
};
